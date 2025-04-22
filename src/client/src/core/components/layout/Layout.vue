<template>
  <oxd-layout
    :class="{
      'orangehrm-upgrade-layout': showUpgrade,
    }"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <template v-if="showUpgrade" #topbar-header-right-area>
      <!-- <upgrade-button v-if="showUpgrade" /> -->
    </template>
    <template #user-actions>
      <li>
        <a
          href="#"
          role="menuitem"
          class="oxd-userdropdown-link"
          @click="openAboutModel"
        >
          {{ $t('general.about') }}
        </a>
      </li>
      <li>
        <a :href="supportUrl" role="menuitem" class="oxd-userdropdown-link">
          {{ $t('general.support') }}
        </a>
      </li>
      <li v-if="updatePasswordUrl">
        <a
          :href="updatePasswordUrl"
          role="menuitem"
          class="oxd-userdropdown-link"
        >
          {{ $t('general.change_password') }}
        </a>
      </li>
      <li>
        <a :href="logoutUrl" role="menuitem" class="oxd-userdropdown-link">
          {{ $t('general.logout') }}
        </a>
      </li>
    </template>
    <template #nav-actions>
      <oxd-icon-button
        name="question-lg"
        :title="$t('general.help')"
        @click="onClickSupport"
      />
    </template>
  </oxd-layout>
  <about v-if="showAboutModel" @close="closeAboutModel"></about>
</template>

<script>
import {provide, readonly, ref} from 'vue';
import About from '@/core/pages/About.vue';
import {OxdLayout} from '@ohrm/oxd';
import {dateFormatKey} from '@/core/util/composable/useDateFormat';
// import UpgradeButton from '@/core/components/buttons/UpgradeButton.vue';

export default {
  components: {
    about: About,
    'oxd-layout': OxdLayout,
    // 'upgrade-button': UpgradeButton,
  },
  inheritAttrs: false,
  props: {
    permissions: {
      type: Object,
      default: () => ({}),
    },
    logoutUrl: {
      type: String,
      default: '#',
    },
    supportUrl: {
      type: String,
      default: '#',
    },
    updatePasswordUrl: {
      type: String,
      default: '#',
    },
    dateFormat: {
      type: Object,
      default: null,
    },
    helpUrl: {
      type: String,
      default: null,
    },
    showUpgrade: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
  const showAboutModel = ref(false);
  provide('permissions', readonly(props.permissions));
  provide(dateFormatKey, readonly(props.dateFormat));

  const openAboutModel = () => {
    showAboutModel.value = true;
  };

  const closeAboutModel = () => {
    showAboutModel.value = false;
  };

  const onClickSupport = () => {
    if (props.helpUrl) window.open(props.helpUrl, '_blank');
  };

  // ✅ Inject Admin Attendance menu item
  onMounted(() => {
    const interval = setInterval(() => {
      const menu = document.querySelector('.oxd-dropdown-menu');
      if (menu && !document.querySelector('#admin-attendance-link')) {
        const li = document.createElement('li');
        li.innerHTML = `
          <a id="admin-attendance-link" class="oxd-topbar-body-nav-tab-link" href="#">
            Admin Attendance
          </a>
        `;
        li.onclick = () => {
          window.location.href = '/web/index.php/time/adminAttendance';
        };
        menu.appendChild(li);
        clearInterval(interval);
      }
    }, 300); // Retry until dropdown is rendered
  });

  return {
    onClickSupport,
    showAboutModel,
    openAboutModel,
    closeAboutModel,
  };
}

</script>

<style lang="scss">
.orangehrm-upgrade-layout {
  .oxd-topbar-header-userarea {
    display: flex;
    justify-content: flex-end; /* Moves it to the right */
    align-items: center; /* Ensures it stays vertically aligned */
    margin-left: auto; /* Pushes it to the right */
  }
}
</style>
