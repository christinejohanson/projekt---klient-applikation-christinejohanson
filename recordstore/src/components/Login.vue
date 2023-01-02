<template>
    <form @submit.prevent="loginUser()">
        <div class="mb-3">
        <label for="email"></label>
        <input v-model="email" type="email" class="form-control" placeholder="e-post">
    </div>
    <div class="mb-3">
        <label for="password"></label>
        <input v-model="password" type="password" class="form-control" placeholder="lösenord">
    </div>
        <input type="submit" class="btn btn-sm" value="Logga in"><br><br>

        <span> {{ felmess }}</span>
        <span> {{ correctmess }}</span>
    </form>
</template>

<script>
//databojekt för att koppla till inmatningsfält. mellan js och dom. 
export default {
        data() {
            return {
                email: "",
                password: "",
                felmess: "",
                correctmess: ""
            }
        },

        methods: {
                   async loginUser() {
                     //kontrollerar inmatning så de inte är tomma
                    if(this.email && this.password != "") {
                    //console.log("bra jobbat du har fyllt i både email o password.!");

                        let loginuserBody = {
                        //skickar med värdet i formuläret
                        email: this.email,
                        password: this.password,

                        };
                    //gör fetchanrop till api. post metod
                    const res = await fetch("http://127.0.0.1:8000/api/login", {
                        method : "POST",
                        headers : {
                        "Accept": "application/json",    
                        "Content-type": "application/json"
                        },
                        //vad ska vi skicka med. loginbody
                        body: JSON.stringify(loginuserBody)
                        
                    })
                    
                    .then(res => res.json())  
                    .then(data => {
                        //kontrollerar token om den är null
                        if (data.token == null) {
                            //felmess från apiet
                            this.felmess = data.message;
                        } else {
                            //variabel för token
                            let token = data.token;
                            //spara token i localstorage
                            localStorage.setItem('token', token);
                            //correct mess    
                            this.correctmess = "användare inloggad";
                            //töm inmatningsfälet
                            this.email = "";
                            this.password = "";
                            //redirect till hemsidan
                            this.$router.push('/');

                            }
                            })

                            .catch(err => console.log(err)); 
                    } else {
                    this.felmess = "alla fält måste fyllas i";
                }
                }           
        }
    }    
</script>

<style scoped>
form {
    margin-top: 140px;
    width: 80%;
}
.btn-sm {
    background-color: #eea08c;
    color: #444447;
}
.form-control {
    background-color: #d7c5bb;
}
</style>