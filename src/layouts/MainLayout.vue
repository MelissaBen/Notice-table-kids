<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="btn-menu"
        />
        <q-toolbar-title class="absolute-center">
          Notice Table Kids
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label class="text-h6" header>Menu</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4 text-h6"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import { mapGetters } from "vuex";

export default {
  name: "MyLayout",
  computed: {
    ...mapGetters("example", ["getMenuNavigation"])
  },
  data() {
    return {
      leftDrawerOpen: false,
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: "Accueil",
          icon: "home",
          to: "/"
        },
        {
          label: "FAQ",
          icon: "question_answer",
          to: "/FAQ"
        },
        {
          label: "Bon à savoir",
          icon: "wb_incandescent",
          to: "/Info"
        },
        {
          label: "Contact",
          icon: "contact_page",
          to: "/Contact"
        }
      ]
    };
  },
  methods: {
    openURL
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .btn-menu {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
