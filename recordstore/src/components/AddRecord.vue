<template>
    <form @submit.prevent="addRecord()">
        <div class="mb-3">
        <label for="name"></label>
        <input v-model="name" type="text" class="form-control" placeholder="skriv in namn">
        </div>
        <div class="mb-3">
        <label for="artist"></label>
        <input v-model="artist" type="text" class="form-control" placeholder="skriv in artist">
        </div>
        <div class="mb-3">
        <label for="record_type"></label>
        <input v-model="record_type" type="text" class="form-control" placeholder="skriv in skivtyp">
        </div> 
        <div class="mb-3">  
        <label for="release_year"></label>
        <input v-model="release_year" type="number" class="form-control" placeholder="skriv in släppår">
        </div>
        <div class="mb-3">  
        <label for="stock"></label>
        <input v-model="stock" type="number" class="form-control" placeholder="skriv in lagersaldo">
        </div>
        <input type="submit" class="btn btn-sm" value="Lägg till"><br><br>
        <span> {{ felmess }}</span>
        <span> {{ correctmess }}</span>
        
    </form>
</template>

<script>
    //databojekt för att koppla till inmatningsfält. mellan js och dom. 
    export default {
        data() {
            return {
                name: "",
                artist: "",
                record_type: "",
                release_year: "",
                stock: "",
                felmess: "",
                correctmess: ""
            }
        },
         //deklarerar emitsen
        emits: ["addrecordAdded"],
        methods: {
            
            async addRecord() {
                //kontrollerar inmatning så de inte är tomma
                if(this.name && this.artist && this.record_type && this.release_year && this.stock != "") {
                    
                    let addrecordBody = {
                        //skickar med värdet i formuläret
                        name: this.name,
                        artist: this.artist,
                        record_type: this.record_type,
                        release_year: this.release_year,
                        stock: this.stock
                    };
                    let token = localStorage.getItem('token');
                    //gör fetchanrop till api. post metod
                    const resp = await fetch("http://127.0.0.1:8000/api/record", {
                        method : "POST",
                        headers : {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                    },
                    //vad ska vi skicka med. recordbody
                    body: JSON.stringify(addrecordBody)

                    });
                    //vänta på svaret
                    const data = await resp.json();
                    //töm inmatningsfälet
                    this.name = "";
                    this.artist = "";
                    this.record_type = "";
                    this.release_year = "";
                    this.stock = "";

                    //ladda om sidan. gör en emit till parentsidan
                    this.$emit("addrecordAdded");
                    this.felmess = "";
                    this.correctmess = "skivan tillagd";
                    //console.log("SKIVA TILLAGD!");
                } else {
                    this.correctmess = "";
                    this.felmess = "alla fält måste fyllas i";
                    //console.log("fyll i föfan");
                }
            }
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

