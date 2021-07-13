<template>
  <div>
    <div class="mt-5 d-flex justify-content-center align-items-center">
      <div>
        <b-form @submit.prevent="login">
          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
              id="input-1"
              type="email"
              v-model="form.email"
              placeholder="Tu email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              placeholder="Tu password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" block>Enviar</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const { email, password } = this.form;
        await firebase.auth().signInWithEmailAndPassword(email, password);
        this.$router.push("home");
      } catch (error) {
        this.$bvToast.toast(error.message, {
          title: `Error`,
          variant: "danger",
          solid: true,
        });
      }
    },
  },
};
</script>
