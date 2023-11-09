<template>
    <div class="box-tela-oculta" :class="{ hide: telaEdit.ocultar }">
        <section class="box-interna">
            <h1>Gostaria de alterar o nome da sua lista?</h1>
            <form>
                <input type="text" required v-model="inputValue"/>
                <button type="button" @click="AlterarLista" >Alterar</button>
            </form>
        </section>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useTelaEdit, useListaDeTarefas, useTelaOculta } from '../../store/index'



export default defineComponent({
    name: 'Edit-Component-vue',
    setup() {
    const listaDeTarefas = useListaDeTarefas()
    const telaEdit = useTelaEdit()
    const telaOculta = useTelaOculta()
    return {
      listaDeTarefas,
      telaEdit,
      telaOculta
    }
  },
  data(){
    return{
        inputValue: '',
    }
  },
  methods:{
    AlterarLista(){
        this.listaDeTarefas.alterarLista(this.listaDeTarefas.indice, this.inputValue)
        this.telaEdit.ocultarTelaEdit()
        this.inputValue = ''
    },
    VerificarNome(){
      this.inputValue = this.listaDeTarefas.listas[this.listaDeTarefas.indice].name
    }
  },
  watch: {
    'telaEdit.ocultar': 'VerificarNome',
  },
})
</script>

<style>
.hide{
    display: none !important;
}

</style>