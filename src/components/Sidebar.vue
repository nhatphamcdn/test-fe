<template>
  <nav class="sidebar">
    <h1>Role: {{ role }}</h1>
    <ul>
      <li v-for="(item, i) in menuList" :key="i">
        {{ item.name }} - Link to: {{ item.to }}
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    menuList: function () {
      return this.initLists();
    },
  },
  data: () => ({
    role: null,
    lists: [
      {
        name: "Certifications",
        to: "staff-certifications",
        permission: "take-test",
      },
      {
        name: "Certificates",
        to: "admin-certificates",
        permission: "manage-certificate",
      },
      {
        name: "Courses",
        to: "admin-courses",
        permission: "manage-course",
      },
      {
        name: "Users",
        to: "admin-users",
        permission: "manage-user",
      },
      {
        name: "Companies",
        to: "admin-companies",
        permission: "manage-company",
      },
      {
        name: "Settings",
        to: "admin-settings",
        permission: ["manage-company", "manage-user"],
      },
      {
        name: "Notifications",
        to: "notifications",
        permission: [
          "take-test",
          "manage-company",
          "manage-user",
          "manage-course",
          "manage-certificate",
        ],
      },
      {
        name: "Profile",
        to: "staff-profile",
        permission: "take-test",
      },
    ],
  }),
  methods: {
    initLists() {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      this.role = userInfo.role.name;
      let userPermissions = userInfo.role.permissions;
      userPermissions = userPermissions.map((permission) => permission.slug);
      return this.lists.filter((item) => {
        if (typeof item.permission === "string") {
          return userPermissions.indexOf(item.permission) !== -1;
        }

        return userPermissions.some(function (required) {
          return [required].every(function (permission) {
            return item.permission.indexOf(permission) !== -1;
          });
        });
      });
    },
  },
};
</script>