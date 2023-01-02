<template>
     <p>signa upp formulär</p>
    <form @submit.prevent="addUser()">
       

        <label for="name"></label>
        <input v-model="name" type="text" placeholder="skriv in namn"><br>

        <label for="email"></label>
        <input v-model="email" type="email" placeholder="skriv in e-post"><br>

        <label for="password"></label>
        <input v-model="password" type="text" placeholder="välj lösenord"><br>


        <input type="submit" value="Skapa användare">
    </form>
</template>

<script>
//databojekt för att koppla till inmatningsfält. mellan js och dom. 
export default {
        data() {
            return {
                name: "",
                email: "",
                password: ""
            }
        },
         //deklarerar emitsen
        emits: ["adduserAdded"],
        methods: {
            async addUser() {
                //kontrollerar inmatning så de inte är tomma
                if(this.name && this.email && this.password != "") {
                    
                    let adduserBody = {
                        //skickar med värdet i formuläret
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    };

                    // för fetchanrop
                    fetch("http://127.0.0.1:8000/api/register", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    .then(res => res.json())
                    .then(data => console.log(data))
                    .then(err => console.log(err));
                                       
                } 
            }
        }
    }    
</script>