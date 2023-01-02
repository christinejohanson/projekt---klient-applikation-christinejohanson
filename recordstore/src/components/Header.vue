<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                        <RouterLink to="/" a class="nav-link active">   
                        <img src="../assets/ordinary_logo.png" width="100" class="d-inline-block align-text-top"></RouterLink> 
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item"><RouterLink to="/" a class="nav-link active" aria-current="page">HEM</RouterLink></li>
                            <li class="nav-item"><RouterLink to="/recordlist" a class="nav-link active">ALLA SKIVOR</RouterLink></li>
                            <li class="nav-item"><RouterLink to="/addrecord" a class="nav-link active">LÄGG TILL SKIVA</RouterLink></li>
                            <li class="nav-item"><RouterLink to="/track" a class="nav-link active">ALLA SPÅR</RouterLink></li>
                            </ul>
                        </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
//ange vilka komponenter som ska användas
export default {
    components: {
        RouterLink
    }
}    
</script>

<style scoped>


.navbar-collapse {
    background-color: #d7c5bb;
    margin-top: 10px;
    border-radius: 5px;
    text-align: center;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(238,158,138, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.navbar-toggler {
  border-color: rgb(238, 158, 138);
}

.nav-link:hover {
    background-color: #eea08c;
}

</style>