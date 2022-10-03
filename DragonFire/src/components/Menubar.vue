<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const open: any | undefined = ref(false)

const handleClick: any = () => {
    open.value = true
    return console.log("Du har tryckt")
}



</script>

<template> 
    <button v-on:click=handleClick >TEST</button>
    <Dialog :visible=open >Massa skit som ska stå här</Dialog>
</template>



<style>

    

</style>