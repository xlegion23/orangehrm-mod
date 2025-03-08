/*!
 * Built by Revolist
 */
import { GROUP_DEPTH, GROUP_EXPANDED, PSEUDO_GROUP_COLUMN, PSEUDO_GROUP_ITEM, PSEUDO_GROUP_ITEM_ID, PSEUDO_GROUP_ITEM_VALUE, GROUP_ORIGINAL_INDEX, } from './grouping.const';
/**
 * Gather data for grouping
 * @param array - flat data array
 * @param groupIds - ids of groups
 * @param expanded - potentially expanded items if present
 */
export function gatherGrouping(array, groupIds, { prevExpanded, expandedAll }) {
  const groupedItems = new Map();
  array.forEach((item, originalIndex) => {
    const groupLevelValues = groupIds.map((groupId) => item[groupId] || null);
    const lastLevelValue = groupLevelValues.pop();
    let currentGroupLevel = groupedItems;
    groupLevelValues.forEach((value) => {
      if (!currentGroupLevel.has(value)) {
        currentGroupLevel.set(value, new Map());
      }
      currentGroupLevel = currentGroupLevel.get(value);
    });
    if (!currentGroupLevel.has(lastLevelValue)) {
      currentGroupLevel.set(lastLevelValue, []);
    }
    item[GROUP_ORIGINAL_INDEX] = originalIndex;
    const lastLevelItems = currentGroupLevel.get(lastLevelValue);
    lastLevelItems.push(item);
  });
  let itemIndex = -1;
  const groupingDepth = groupIds.length;
  // collapse all groups in the beginning
  const trimmed = {};
  // index mapping
  const oldNewIndexMap = {};
  // check if group header exists
  const pseudoGroupTest = {};
  const sourceWithGroups = [];
  function flattenGroupMaps(groupedValues, parentIds, isExpanded) {
    const depth = parentIds.length;
    groupedValues.forEach((innerGroupedValues, groupId) => {
      const levelIds = [...parentIds, groupId];
      const mergedIds = levelIds.join(',');
      const isGroupExpanded = isExpanded && (!!expandedAll || !!(prevExpanded === null || prevExpanded === void 0 ? void 0 : prevExpanded[mergedIds]));
      sourceWithGroups.push({
        [PSEUDO_GROUP_ITEM]: groupId,
        [GROUP_DEPTH]: depth,
        [PSEUDO_GROUP_ITEM_ID]: JSON.stringify(levelIds),
        [PSEUDO_GROUP_ITEM_VALUE]: mergedIds,
        [GROUP_EXPANDED]: isGroupExpanded,
      });
      itemIndex += 1;
      if (!isGroupExpanded && depth) {
        trimmed[itemIndex] = true;
      }
      if (Array.isArray(innerGroupedValues)) {
        innerGroupedValues.forEach((value) => {
          itemIndex += 1;
          if (!isGroupExpanded) {
            trimmed[itemIndex] = true;
          }
          oldNewIndexMap[value[GROUP_ORIGINAL_INDEX]] = itemIndex;
          const pseudoGroupTestIds = levelIds.map((_value, index) => levelIds.slice(0, index + 1).join(','));
          pseudoGroupTestIds.forEach((pseudoGroupTestId) => {
            if (!pseudoGroupTest[pseudoGroupTestId]) {
              pseudoGroupTest[pseudoGroupTestId] = [];
            }
            pseudoGroupTest[pseudoGroupTestId].push(itemIndex);
          });
        });
        sourceWithGroups.push(...innerGroupedValues);
      }
      else {
        flattenGroupMaps(innerGroupedValues, levelIds, isGroupExpanded);
      }
    });
  }
  flattenGroupMaps(groupedItems, [], true);
  return {
    sourceWithGroups,
    depth: groupingDepth,
    trimmed,
    oldNewIndexMap,
    childrenByGroup: pseudoGroupTest, // used to get child items in group
  };
}
export function getGroupingName(rgRow) {
  return rgRow && rgRow[PSEUDO_GROUP_ITEM];
}
export function isGrouping(rgRow) {
  return rgRow && typeof rgRow[PSEUDO_GROUP_ITEM] !== 'undefined';
}
export function isGroupingColumn(column) {
  return column && typeof column[PSEUDO_GROUP_COLUMN] !== 'undefined';
}
export function measureEqualDepth(groupA, groupB) {
  const ln = groupA.length;
  let i = 0;
  for (; i < ln; i++) {
    if (groupA[i] !== groupB[i]) {
      return i;
    }
  }
  return i;
}
export function getParsedGroup(id) {
  const parseGroup = JSON.parse(id);
  // extra precaution and type safe guard
  if (!Array.isArray(parseGroup)) {
    return null;
  }
  return parseGroup;
}
// check if items is child of current clicked group
export function isSameGroup(currentGroup, currentModel, nextModel) {
  const nextGroup = getParsedGroup(nextModel[PSEUDO_GROUP_ITEM_ID]);
  if (!nextGroup) {
    return false;
  }
  const depth = measureEqualDepth(currentGroup, nextGroup);
  return currentModel[GROUP_DEPTH] < depth;
}
