<template>
    <form @submit.prevent="addTrack()">
        <label for="title"></label>
        <input v-model="title" type="text" placeholder="skriv in titel"><br>

        <label for="length"></label>
        <input v-model="length" type="text" placeholder="skriv in låtlängde"><br>

        <label for="track_no"></label>
        <input v-model="track_no" type="text" placeholder="skriv in låtnummer"><br>

        <label for="record_id"></label>
        <input v-model="record_id" type="text" placeholder="skriv in record id"><br>


        <input type="submit" value="Lägg till">

    </form>
</template>

<script>
    //databojekt för att koppla till inmatningsfält. mellan js och dom. 
    export default {
        data() {
            return {
                title: "",
                length: "",
                track_no: "",
                record_id: ""
            }
        },
         //deklarerar emitsen
        emits: ["addtrackAdded"],
        methods: {
            async addTrack() {
                //kontrollerar inmatning så de inte är tomma
                if(this.title && this.length && this.track_no && this.record_id != "") {
                    
                    let addtrackBody = {
                        //skickar med värdet i formuläret
                        title: this.title,
                        length: this.length,
                        track_no: this.track_no,
                        record_id: this.record_id
                    };
                    
                    //gör fetchanrop till api. post metod
                    const resp = await fetch("http://127.0.0.1:8000/api/addtrack", {
                        method : "POST",
                        headers : {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    //vad ska vi skicka med. recordbody
                    body: JSON.stringify(addtrackBody)

                    });
                    //vänta på svaret
                    const data = await resp.json();
                    //töm inmatningsfälet
                    this.title = "";
                    this.length = "";
                    this.track_no = "";
                    this.record_id = "";

                    //ladda om sidan. gör en emit till parentsidan
                    this.$emit("addtrackAdded");

                } 
            }
        }
    }

</script>