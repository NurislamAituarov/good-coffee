<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
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
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon
            >
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->

      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-account-circle",
          title: "Айтуаров Нурислам",
        },
        {
          icon: "mdi-home-map-marker",
          title: "Торговые точки",
          to: "/1",
        },
        {
          icon: "mdi-cog",
          title: "Кофемашины",
          to: "/Inspire",
        },
        {
          icon: "mdi-handshake-outline",
          title: "Партнеры",
          to: "/3",
        },
        {
          icon: "mdi-account-group",
          title: "Сотрудники",
          to: "/4",
        },
        {
          icon: "mdi-liquor",
          title: "Напитки",
          to: "/5",
        },
        {
          icon: "mdi-card-account-details-outline",
          title: "Абонементы",
          to: "/6",
        },
        {
          icon: "mdi-card-account-details-star-outline",
          title: "Активные абонименты",
          to: "/7",
        },
        {
          icon: "mdi-account-group",
          title: "Пользователи",
          to: "/",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>
