<template>
  <Header />
  <div class="container-fluid">
    <div id="headerandform">

  <p>Hej och välkommen till admin-sidan för Ordinary. Här kan du via menyn ovan lägga till 
    nya skivor, uppdatera befintliga med t.ex. lagersaldo, se låtspår på varje skiva. 
  </p><br>
  <p>Kom ihåg att logga ut när du är färdig!</p>
</div>
  <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
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
#headerandform p {
  font-weight: 700;
  font-size: 1.4em;


}

</style>
