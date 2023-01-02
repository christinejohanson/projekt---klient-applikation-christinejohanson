<template>
    <Header />
    <div class="container-fluid">
        <div id="headerandform">
    <h2>spår på vald skiva</h2>
    <!--loop o skriver ut titel spår o längd -->
    
    <article v-for="track in tracks" :track="track" :key="track.id">
        <div id="recordtext">
    <p>{{track.title}}</p>
    <p>{{track.track_no}}</p>
    <p>{{track.length}}</p>
        </div>
    </article>
    
    </div>
    <Footer />
</div>
</template>

<script>
    import Header from "../components/Header.vue";
    import Footer from "../components/Footer.vue";
    export default {
       data() {
        return {
            tracks: [],
            felmess: "",
            correctmess: ""
        }
       },

       components: {
        Header,
        Footer
       },

       methods:  {
            validatedUser() {
            let token = localStorage.getItem('token');
            //console.log(token);
            if (token === null) {
            this.$router.push('/login');
            } 
            }, 

            //metod för att hämta track till record id
            async getRecordtracks() {
                let token = localStorage.getItem('token');    
            const resp = await fetch("http://127.0.0.1:8000/api/gettracks/" + this.$route.params.id, {
            
                        method : "GET",
                        headers : {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                    },
                });
            const data = await resp.json();
            this.tracks = data;
            }
            
    },
    mounted() {
        this.validatedUser();
        this.getRecordtracks();
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

#recordtext {
    color: #444447;
    background-color: #d7c5bb;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}
</style>