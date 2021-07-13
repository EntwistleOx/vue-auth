<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand>Desafio 1</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="home"> Home </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button
            variant="outline-primary"
            class="my-2 my-sm-0"
            @click="logout"
          >
            Logout
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Navbar',
  methods: {
    async logout() {
      try {
        await firebase.auth().signOut();
        this.$router.push('login');
      } catch (error) {
        this.$bvToast.toast(error.message, {
          title: `Error`,
          variant: 'danger',
          solid: true,
        });
      }
    },
  },
};
</script>

<style></style>
