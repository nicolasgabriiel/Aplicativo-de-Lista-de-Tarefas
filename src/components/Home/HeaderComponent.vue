<template>
    <header>
        <h1>TaskNest</h1>
        <div class="linha"></div>
    </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Header-Component'
})
</script>

<style>
header h1{
    font-family: agbalumo;
    font-size: 4em;
    padding: 20px 80px;
    transition: 0.5s;
    display: inline-block;
}
header h1:hover{
    color: rgb(43, 43, 43);
    cursor: pointer;
}
.linha{
    width: 100%;
    height: 1px;
    background-color:#a0f46e;
}
</style>