<template>
    <header>
        <RouterLink to="/" class="router-link">
        <h1>TaskNest</h1>
        <button @click="listaDeTarefas.teste" type="button">TESTE</button>
    </RouterLink>
        <div class="linha"></div>
    </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useListaDeTarefas } from '@/store'


export default defineComponent({
    name: 'Header-Component',
    setup() {
    const listaDeTarefas = useListaDeTarefas()
    return {
      listaDeTarefas,
    }
    
}
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
.router-link{
  text-decoration: none;
  color: black;
}
</style>