<template>
    <article>
        <div id="recordtext">
        <p>{{title.title}}</p>
        <p>{{title.track_no}}</p>
        <p>{{title.length}}</p>
        <p>{{title.record_id}}</p> 
    </div>
    </article>
</template>

<script>
     export default {
            props: {
                title: Object
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


</style>