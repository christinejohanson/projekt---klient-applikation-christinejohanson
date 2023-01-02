<template>
   <Header />
    <div class="container-fluid">
      <div id="headerandform">
       <h2>add new record</h2>
       <AddRecord />
      </div>
      <Footer />
    </div>
</template>

<script>
    import Header from "../components/Header.vue";
    import AddRecord from "../components/AddRecord.vue";
    import Footer from "../components/Footer.vue";

    export default {
        components: {
            Header,
            AddRecord,
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