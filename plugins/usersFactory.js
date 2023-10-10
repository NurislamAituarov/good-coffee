export default ({ app }, inject) => {
  inject("usersFactory", {
    async loadUsers(offset = 0, limit = 100) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const users = [];
      for (let i = 0; i < limit; i++) {
        users.push({ id: offset + i, name: `User ${offset + i}` });
      }
      return users;
    },
  });
};
