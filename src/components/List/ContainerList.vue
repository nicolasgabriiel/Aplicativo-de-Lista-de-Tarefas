<template>
  <div class="container-geral">
    <h1 >{{ nomeDaLista}}</h1>
    <div>
        <ul class="tarefas">
          <div class="markdown"></div>
            <li v-for="(tarefa, index) in listaDeTarefas.listas[indice].tarefas" :key="index">
        {{ tarefa }}
        <button  @click="listaDeTarefas.removerTarefa(index, index)"></button>
            </li>
        </ul>
    </div>
    <form class="formulario">
        <input type="text" required placeholder="Qual a sua tarefa?" v-model="inputValue"/>
        <button type="button" class='button-add' @click="adicionarTarefas(inputValue, indice)" ></button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useListaDeTarefas } from '../../store/index'


export default defineComponent({
  name: 'Principal-Component',
  setup() {
    const listaDeTarefas = useListaDeTarefas()
    return {
      listaDeTarefas,
    }
  },
  data(){
    return{
        nomeDaLista: '',
        indice: 0,
        inputValue: ''
    }
  },
  methods:{
    adicionarTarefas(value: string, indice: number){
      this.listaDeTarefas.adicionarTarefa(value, indice),
      console.log('chamei a função')
      this.inputValue = ''
      console.log(this.listaDeTarefas.listas[this.indice].tarefas)
    },
    gerarNomeLista(){
      console.log('executei a função')
      this.nomeDaLista = this.listaDeTarefas.listas[this.listaDeTarefas.indice].name
    }
  },
  
  watch:{
    'listaDeTarefas.aviso' : 'gerarNomeLista'
  }

})
</script>

<style>
.container-geral{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-geral h1{
  font-size: 2em;
  background-color: #67df36;
  border: none;
  box-shadow: none;
  border-radius: 10px;
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 50px;
  margin: 50px 0;
}
.formulario{
  display: flex;
  flex-direction: row;
  align-items: flex-end;

}
.formulario input{
    font-size: 1.5em;
    display: inline-block ;
    margin-top: 20px;
    padding: 5px 20px;
    text-align: center;
    border-radius: 10px;
    border: none;
}
.formulario .button-add{
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-size: contain;
  transition: 0.2s;
  background-image: url(../../assets/botao-adicionar.png);
}
.formulario .button-add:hover{
 scale: 1.03;
 background-color: white;
 border-radius: 13px;
}
.tarefas{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tarefas li{
  background-color: #a0f46e;
  border: none;
  box-shadow: none;
  border-radius: 10px;
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 35px;
  font-size: 1.5em;
  margin-top: 10px;

}

.tarefas li button{
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-size: contain;
  transition: 0.2s;
  margin-left: 10px;
  background-image: url(../../assets/lixo.png);
}

.tarefas li button:hover{
  scale: 1.1;
}
</style>