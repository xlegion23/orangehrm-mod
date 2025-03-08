import type { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import type { VNode } from '@revolist/revogrid/dist/types/stencil-public-runtime';
/**
 *  Custom cell renderer function as expected in Revo grid
 *  https://revolist.github.io/revogrid/guide/jsx.template.html#jsx-tsx-custom-content-render
 */
declare const cellTemplateFn: (component: string) => (createElement: RevoGrid.HyperFunc<VNode>, column: RevoGrid.ColumnDataSchemaModel) => VNode | null;
export default cellTemplateFn;
