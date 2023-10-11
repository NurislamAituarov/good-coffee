<template>
  <div>
    <button @click="loadUsers">Загрузить пользователей</button>
    <SkeletonLoader v-if="isLoading" />
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import SkeletonLoader from "../components/SkeletonLoader.vue";

export default {
  name: "IndexPage",
  components: { SkeletonLoader },

  data() {
    return {
      users: [],
      isLoading: false,
    };
  },
  methods: {
    async loadUsers() {
      this.isLoading = true;
      this.users = []; // Очистка текущего списка пользователей
      let offset = 0;
      const limit = 500;
      const totalUsers = 8000;
      while (offset < totalUsers) {
        const newUsers = await this.$usersFactory.loadUsers(offset, limit);
        this.isLoading = false;
        this.users = this.users.concat(newUsers);
        offset += limit;
      }
    },
  },
};
</script>
