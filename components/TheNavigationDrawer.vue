<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :width="300"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        @click.stop="miniVariant = false"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        <v-btn v-if="!item.to" icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <TheSwitchTheme @toggle-theme="toggleTheme" />
  </v-navigation-drawer>
</template>

<script>
import TheSwitchTheme from "./TheSwitchTheme.vue";

export default {
  name: "TheNavigationDrawer",

  components: { TheSwitchTheme },

  props: {
    drawer: { type: Boolean, default: false },
    miniVariant: { type: Boolean, default: false },
    items: { type: Array, default: [] },
  },

  mounted() {
    this.startTheme();
  },

  methods: {
    // function to set a given theme/color-scheme
    setTheme: function (themeName) {
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;
    },
    // function to toggle between light and dark theme
    toggleTheme: function () {
      if (localStorage.getItem("theme") === "theme-dark") {
        this.setTheme("theme-light");
      } else {
        this.setTheme("theme-dark");
      }
    },
    // Immediately invoked function to set the theme on initial load
    startTheme: function () {
      if (localStorage.getItem("theme") === "theme-dark") {
        this.setTheme("theme-dark");
        document.getElementById("slider").checked = false;
      } else {
        this.setTheme("theme-light");
        document.getElementById("slider").checked = true;
      }
    },
  },
};
</script>