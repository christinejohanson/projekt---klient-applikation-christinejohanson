<template>
    <footer class="bg-4 text-center">
    <button type="button" class="btn btn-sm" @click="logOut">Logga ut</button><br>
    <p>Projekt - Fullstack-utveckling med ramverk - chjo2104 - Christine Johanson 2022</p>
    </footer>
</template>

<script>
    export default {
        methods: {
             async logOut() {
                let token = localStorage.getItem('token');
                //anropar api logout
                const res = await fetch("http://127.0.0.1:8000/api/logout", {
                        method : "POST",
                        headers : {
                        "Accept": "application/json",    
                        "Content-type": "application/json",
                        "Authorization" : "Bearer " + token
                        },
                    })
                    //remove item från local storage. 
                        .then(res => res.json())
                        .then(data => {
                            localStorage.removeItem('token');

                        });
                        //redirectar till loginsidan
                        this.$router.push('/login');
            }
        }
    } 

</script>

<style scoped>
footer {
  margin-top: 300px;  
  color: #d7c5bb;
}

.btn-sm {
    background-color: #eea08c;
    color: #444447;
}

.bg-4 p {
    padding: 50px 0;
}

</style>