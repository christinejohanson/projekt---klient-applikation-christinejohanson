<template>
    <Header />
    <div class="container-fluid">
        <div id="headerandform">
        <h2>record list</h2>
        <!-- ny instans av record skapas. o den loopas igenom. som enskilda komponenter
        skicka med record som argument. id som nyckel måste skickas med.
        @ är händelselyssnare som lyssnar till deleterecord-->
    <Record @deleteRecord="deleteRecord(name.id)" v-for="name in records" :name="name" :key="name.id" />
     <span> {{ felmess }}</span>
     <span> {{ correctmess }}</span>
        </div>
    <Footer /> 
    </div>   
</template>

<script>
    import Header from "../components/Header.vue";
    import Record from "../components/Record.vue";
    import Footer from "../components/Footer.vue";

    export default {
        //skapar reaktiv data för komponent.
        data() {
            //returnerar ett objekt
            return {
                felmess: "",
                correctmess: "",
                //en array. o varje blir ett objekt. o de behöver ett id.
                records: []
            }
        },
        components: {
            Header,
            Record,
            Footer
        },
        //metoderna
        methods: {
            validatedUser() {
            let token = localStorage.getItem('token');
            if (token === null) {
            this.$router.push('/login');
            } 
            }, 

             async getRecords() {
                let token = localStorage.getItem('token');
                //syntax för ajax
                const res = await fetch("http://127.0.0.1:8000/api/record", {
                    method: "GET",
                    headers: {
                        //skicka med token i headers
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                        },
                    });

                    //vad som händer när man får svar
                    const data = await res.json();
                    //lagrar reaktiva datan
                    this.records = data;
                }, 
            
                //asynkfunktion pga ajax.
                async deleteRecord(id) {
                let token = localStorage.getItem('token');
                //skicka med id som parameter i anropet
                const resp = await fetch("http://127.0.0.1:8000/api/record/" + id, {
                    //gör ett deleteanrop
                    method: "DELETE",
                    //objekt i json format
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                    }
                });
                //ta tillbaka datan. vänta på respons
                const data = await resp.json();
                this.correctmess = "skivan raderad";
                //anorpar funktionen som uppdaterar reaktiva datan.
                this.getRecords();


            }
        },
        //metod som körs när komponent laddats in.
        mounted() {
            this.validatedUser();
            this.getRecords();
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