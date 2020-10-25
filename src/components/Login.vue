<template>
  <div class="login">
    <h2 style="text-align: center; margin-bottom: 50px">Log in</h2>
    <div class="row">
      <div class="col-4">
        <h3>Account demo</h3>
        <code> test1@gmail.com/123123 - role: member </code>
        <code> test2@gmail.com/123123 - role: staff </code>
        <code> test3@gmail.com/123123 - role: admin </code>
        <code> test4@gmail.com/123123 - role: super admin </code>
      </div>
      <div class="col-8">
        <form @submit.prevent="onSubmit">
          <div>
            <label for="email">Email</label>
            <input
              class="form-control"
              type="text"
              name="email"
              v-model="email"
              autofocus
              placeholder="test@test.com"
            />
          </div>
          <div>
            <label for="password">Passwrod</label>
            <input
              class="form-control"
              type="password"
              v-model="password"
              placeholder="123123"
            />
          </div>
          <button
            class="btn"
            :class="{ 'btn-success': !invalidForm }"
            type="submit"
            :disabled="invalidForm"
          >
            Log In
          </button>
        </form>
        <p class="error" v-if="error">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      rPath: "",
    };
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password;
    },
  },
  created() {
    this.rPath = this.$route.query.rPath || "/";
  },
  mounted() {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
  methods: {
    ...mapActions(["LOGIN"]),
    onSubmit() {
      this.LOGIN({ email: this.email, password: this.password })
        .then((data) => {
          this.$router.push(this.rPath);
        })
        .catch((err) => {
          this.error = err.data.error;
        });
    },
  },
};
</script>
