<template>
    <Header />
    <div class="container-fluid">
        <div id="headerandform">
    <h2>lista på alla spår på alla skivor</h2>
    <Track v-for="title in tracks" :title="title" :key="title.id" />
    </div>
    <Footer />
</div>
</template>

<script>
    import Header from "../components/Header.vue";
    import Track from "../components/Track.vue";
    import Footer from "../components/Footer.vue";

    export default {
         //skapar reaktiv data för komponent.
         data() {
            //returnerar ett objekt
            return {
                //en array. o varje blir ett objekt. o de behöver ett id.
                tracks: []
            }
        },
        components: {
            Header,
            Track,
            Footer
        },
        methods: {
        validatedUser() {
        let token = localStorage.getItem('token');
        if (token === null) {
          this.$router.push('/login');
        } 
        }, 
        async getTracks() {
            let token = localStorage.getItem('token');
                //syntax för ajax
                const resp = await fetch("http://127.0.0.1:8000/api/track", {
                    method: "GET",
                    headers: {
                        //skicka med token i headers
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                        },
                    });
                
                //vad som händer när man får svar
                const data = await resp.json();
                //lagrar reaktiva datan
                this.tracks = data;
            },
    },
    mounted() {
        this.validatedUser(); 
        this.getTracks();
    }
    }

</script>

<style scoped>

#headerandform {
  margin-top: 100px;

}
#headerandform h2 {
  font-size: 1.2em;
}

</style>