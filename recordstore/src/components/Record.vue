<template>
    <article>
        <div id="recordsinlist">
            <div id="recordtext">
             <p>{{name.name}}</p>
             <p>{{name.artist}}</p>
             <p>{{name.record_type}}</p>
             <p>{{name.release_year}}</p>
             <p>{{name.stock}}</p>
            </div>
      
        <!-- routerlink som tar med id till tracklist -->
        <button type="button" class="btn btn-sm"><RouterLink :to="{ name: 'trackid', params: { id: name.id}}">Spår på skivan</RouterLink></button>
        <!--routerlink som tar med id till edit record-->
        <button type="button" class="btn btn-sm"><RouterLink :to="{ name: 'edit record', params: { id: name.id }}">Uppdatera</RouterLink></button>
        <!-- händelselyssnare på klick. o gör en emit som skickas
        till föräldrakomponent. -->
        <button type="button" class="btn btn-danger" @click="$emit('deleteRecord')">Radera</button>
        </div>
    </article>
</template>

<script>
        export default {
      
        //ta emot propsen
        props: {
            name: Object
        }
    }
</script>

<style scoped>

#recordtext {
    color: #444447;
    background-color: #d7c5bb;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}

.btn-sm {
    background-color: #eea08c;
    color: #444447;
    margin-right: 5px;
}

.btn-sm a {
    text-decoration: none;
    color: #444447;
}

article {
    margin-bottom: 30px;
}
</style>