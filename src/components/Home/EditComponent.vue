<template>
    <div class="box-tela-oculta" :class="{ hide: telaEdit.ocultar }">
        <section class="box-interna">
            <h1>Gostaria de alterar o nome da sua lista?</h1>
            <form>
                <input type="text" required v-model="listaDeTarefas.lista[listaDeTarefas.indice]"/>
                <button type="button" @click="chamarFuncoes" >Alterar</button>
            </form>
        </section>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useTelaEdit, useListaDeTarefas } from '../../store/index'



export default defineComponent({
    name: 'Edit-Component',
    setup() {
    const listaDeTarefas = useListaDeTarefas()
    const telaEdit = useTelaEdit()
    return {
      listaDeTarefas,
      telaEdit
    }
  },
  data(){
    return{
        inputValue: ''
    }
  },
  methods:{
    chamarFuncoes(){
        this.inputValue = this.listaDeTarefas.lista[this.listaDeTarefas.indice]
        this.listaDeTarefas.alterarLista(this.listaDeTarefas.indice, this.inputValue)
        this.telaEdit.ocultarTelaEdit()
        this.inputValue = ''
    },
  },
})
</script>

<style>
.hide{
    display: none !important;
}

</style>