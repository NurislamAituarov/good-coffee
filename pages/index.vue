<template>
  <div>
    <button @click="loadUsers">Загрузить пользователей</button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      users: [],
    };
  },

  methods: {
    async loadUsers() {
      this.users = []; // Очистка текущего списка пользователей
      let offset = 0;
      const limit = 500;
      const totalUsers = 8000;

      while (offset < totalUsers) {
        const newUsers = await this.$usersFactory.loadUsers(offset, limit);
        this.users = this.users.concat(newUsers);
        offset += limit;
      }
    },
  },
};
</script>
