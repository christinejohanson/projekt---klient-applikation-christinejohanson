<template>
    <div id="welcome">
    <img src="../assets/ordinary_logo.png"  width="200" class="d-inline-block align-text-top">
    <h2>welcome back!</h2>
    <Login />
    <h3>havent got an account? sign up here. soon</h3>
</div>
</template>

<script>
    import Login from "../components/Login.vue";

    export default {
        components: {
            Login
        }
    }

</script>

<style scoped>
#welcome {
    display: flex;
    flex-direction: column;
}
h2 {
    text-align: center;
    font-weight: 700;
    margin-top: 50px;
}

h3 {
    text-align: center;
    margin-top: 350px;
    font-size: 0.8em;
}

img {
    margin: 0 auto;
}

form {
    margin: 0 auto;
    margin-top: 200px;
}
</style>

