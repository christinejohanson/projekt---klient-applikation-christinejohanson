<template>
    <p>Id på skivan är {{ id }}</p>
   <form @submit.prevent="editRecord(id)">
    <div class="mb-3">
        <label for="name"></label>
        <input v-model="records.name" type="text" class="form-control" placeholder="skriv in namn">
    </div>
    <div class="mb-3">
        <label for="artist"></label>
        <input v-model="records.artist" type="text" class="form-control" placeholder="skriv in artist">
    </div>
    <div class="mb-3">
        <label for="record_type"></label>
        <input v-model="records.record_type" type="text" class="form-control" placeholder="skriv in skivtyp">
    </div> 
    <div class="mb-3">  
        <label for="release_year"></label>
        <input v-model="records.release_year" type="number" class="form-control" placeholder="skriv in släppår">
    </div> 
    <div class="mb-3"> 
        <label for="stock"></label>
        <input v-model="records.stock" type="number" class="form-control" placeholder="skriv in lagersaldo">
    </div>
       <input type="submit" class="btn btn-sm" value="Uppdatera"><br><br>
  
        <span> {{ felmess }}</span>
        <span> {{ correctmess }}</span>

    </form>
</template>

<script>
export default {
    data() {
            return {
                //id från url
                id: this.$route.params.id,
                name: "",
                artist: "",
                record_type: "",
                release_year: "",
                stock: "",
                felmess: "",
                correctmess: "",
                records: []
            }
        },
        emits: ["addrecordAdded"],
        methods: {
        async getRecords() {
            let token = localStorage.getItem('token');
            const resp = await fetch("http://127.0.0.1:8000/api/record/" + this.$route.params.id, {
                    method: "GET",
                    headers: {
                        //skicka med token i headers
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                        },
                    });
            
            const data = await resp.json();
            this.records = data;
        },
        async editRecord(id) {
            let token = localStorage.getItem('token');
            //kontrollerar inmatning så de inte är tomma
            if(this.records.name && this.records.artist && this.records.record_type && this.records.release_year && this.records.stock != "") {
            
                let addrecordBody = {
                        //skickar med värdet från formuläret
                        name: this.records.name,
                        artist: this.records.artist,
                        record_type: this.records.record_type,
                        release_year: this.records.release_year,
                        stock: this.records.stock 
                    };

                    //gör fetchanrop till api. put metod. 
                    const resp = await fetch("http://127.0.0.1:8000/api/record/" + id, {
                    //gör ett uppdateraanrop
                    method: "PUT",
                    //objekt i json format
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                    },
                       //vad ska vi skicka med. recordbody
                       body: JSON.stringify(addrecordBody)
                });

                //ta tillbaka datan. vänta på respons
                const data = await resp.json();

                    //töm inmatningsfälet
                    this.records.name = "";
                    this.records.artist = "";
                    this.records.record_type = "";
                    this.records.release_year = "";
                    this.records.stock = "";

                    this.correctmess = "skivan uppdaterad";
                    this.$router.push('/recordlist');


            
            } else {
                this.felmess = "fyll i alla fält";
            }
        }
        },

        mounted() {
            this.getRecords();
        }
    }
    </script>

<style scoped>
.btn-sm {
    background-color: #eea08c;
    color: #444447;
}

.form-control {
    background-color: #d7c5bb;
}
</style>
