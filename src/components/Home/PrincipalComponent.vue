<template>
  <div>
    <section class="caixa-botao">
      <button type="button" @click="telaOculta.mostrarTelaOculta" :disabled="!disableButton">
        <span>Criar Nova Lista de Tarefas</span>
        
        <img src="../../assets/adicionar-ficheiro.png">
      </button>
    </section>
    <ul class="listas">
    <RouterLink to="/list" class="router-link">
      <li v-for="(item, index) in listaDeTarefas.lista" :key="index">
        {{ item }}
        <button @click="editarLista(index)" :disabled="!disableButton"></button>
        <button  @click="listaDeTarefas.removerLista(index)" :disabled="!disableButton"></button>
      </li>
     </RouterLink>

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
.listas{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.listas li{
  background-color: #a0f46e;
  border: none;
  box-shadow: none;
  border-radius: 10px;
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 35px;
  font-size: 2em;
  margin-top: 20px;

}
.listas li:hover{
  cursor: pointer;
  background-color: #84ea52;
  scale: 1.01;
}
.listas li button{
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-size: contain;
  transition: 0.2s;
  margin-left: 10px;
 
}
.listas li button:hover{
  scale: 1.1;
}
.listas li button:first-child{
  background-image: url(../../assets/editar.png);

}
.listas li button:last-child{
  background-image: url(../../assets/lixo.png);
}
.router-link{
  text-decoration: none;
  color: black;
}


</style>