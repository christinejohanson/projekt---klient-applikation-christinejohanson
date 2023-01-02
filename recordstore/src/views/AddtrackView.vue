<template>
  <Header />
  <div class="container-fluid">
      <div id="headerandform">
    <h2>add track</h2>
    <AddTrack />
    </div>
    <Footer />
    </div>
</template>

<script>
    import Header from "../components/Header.vue";
    import AddTrack from "../components/AddTrack.vue";
    import Footer from "../components/Footer.vue";

    export default {
        components: {
          Header,
            AddTrack,
            Footer
        },

        methods: {
        validatedUser() {
        let token = localStorage.getItem('token');
        if (token === null) {
          this.$router.push('/login');
        } 
      }
    },
    mounted() {
      this.validatedUser();
    }
    }

</script>

<style scoped>

#headerandform {
  margin-top: 100px;

}
#headerandform h2 {
  font-size: 1.2em;
  margin-bottom: 0;

}

</style>