<template>
    <div>
        <section class="caixa-botao">
            <button @click="adicionar" :disabled='AdicionarLista' type="button">Criar Nova Lista de Tarefas</button>
        </section>
        <section class="listas">
            
        </section>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Principal-Component',
    data(){
        return{
            AdicionarLista: false
        }
    },
    methods:{
        adicionar(){
            this.AdicionarLista = true
            console.log(this.AdicionarLista)
        }
    },
})
</script>