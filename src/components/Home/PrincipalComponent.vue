<template>
  <div>
    <section class="caixa-botao">
      <button type="button" @click="telaOculta.mostrarTelaOculta" :disabled="!disableButton">
        <span>Criar Nova Lista de Tarefas</span>
        
        <img src="../../assets/adicionar-ficheiro.png">
      </button>
    </section>
    <ul class="listas">

      <li v-for="(item, index) in listaDeTarefas.lista" :key="index">
        {{ item }}
        <button @click="listaDeTarefas.removerLista(index)" :disabled="!disableButton">Remover</button>
        <button @click="editarLista(index)" :disabled="!disableButton">Editar</button>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTelaEdit, useTelaOculta, useListaDeTarefas } from '../../store/index'


export default defineComponent({
  name: 'Principal-Component',
  setup() {
    const telaOculta = useTelaOculta()
    const listaDeTarefas = useListaDeTarefas()
    const telaEdit = useTelaEdit()
    return {
      telaOculta,
      listaDeTarefas,
      telaEdit
    }
  },
  methods:{
    editarLista(index: number){
      this.listaDeTarefas.indice = index
      this.telaEdit.mostrarTelaEdit()

    },
    DisableButton(){
      if(this.telaOculta.ocultar === false || this.telaEdit.ocultar === false ){
            this.disableButton = false
        }
        else{
          this.disableButton = true
        }
    }
  },
  data(){
    return{
      disableButton: true
    }
  },
  watch: {
    'telaOculta.ocultar': 'DisableButton',
    'telaEdit.ocultar': 'DisableButton',
  },
})
</script>

<style>
.caixa-botao button{
  display: block;
  margin: 50px auto;
  background-color: #a0f46e;
  border: none;
  box-shadow: none;
  border-radius: 10px;
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 50px;
}
.caixa-botao button:hover{
  cursor: pointer;
 background-color: #84ea52;
 scale: 1.02;
}
.caixa-botao button span{
  font-size: 2em;

}
.caixa-botao button img{
 width: 20px;
 margin-left: 10px;

}
</style>