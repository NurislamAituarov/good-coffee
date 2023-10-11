<template>
  <v-app dark>
    <TheNavigationDrawer
      :drawer="drawer"
      :mini-variant="miniVariant"
      :items="items"
    />
    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheNavigationDrawer from "../components/TheNavigationDrawer.vue";

export default {
  name: "DefaultLayout",

  components: { TheNavigationDrawer },

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


<style lang="scss">
.main {
  background-color: var(--font-color);
  color: var(--text-color);
}
</style>