<template>
    <div class="box-tela-oculta" :class="{ hide: telaOculta.ocultar }">
        <section>
            <h1>Como vai ser o nome da sua nova Lista?</h1>
            <form>
                <input type="text" required placeholder="Escreva aqui o nome da sua nova lista" v-model="inputValue"/>
                <button type="button" @click="chamarFuncoes(inputValue)" >Criar</button>
            </form>
        </section>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useTelaOculta } from '../../store/index'
import { useListaDeTarefas } from '../../store/index'

export default defineComponent({
    name: 'Add-Component',
    setup() {
    const telaOculta = useTelaOculta()
    const listaDeTarefas = useListaDeTarefas()
    return {
      telaOculta,
      listaDeTarefas
    }
  },
  data(){
    return{
        inputValue: ''
    }
  },
  methods:{
    chamarFuncoes(value:string){
        this.telaOculta.ocultarTelaOculta() 
        this.listaDeTarefas.adicionarLista(value)
        this.inputValue = ''
    }
  }
})
</script>

<style>
.hide{
    display: none !important;
}
.box-tela-oculta{
 background-color: red;
}
.hide{
    display: none !important;
}
</style>