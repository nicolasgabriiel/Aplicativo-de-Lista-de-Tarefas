<template>
    <div class="box-tela-oculta" :class="{ hide: telaOculta.ocultar }">
        <section class="box-interna">
            <h1>Qual vai ser o nome da sua nova lista?</h1>
            <form>
                <input type="text" required placeholder="Escreva aqui o nome da sua nova lista" v-model="inputValue"/>
                <button type="button" @click="chamarFuncoes(inputValue)" >Criar</button>
            </form>
        </section>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useTelaOculta, useListaDeTarefas } from '../../store/index'



export default defineComponent({
    name: 'Add-Component',
    setup() {
    const telaOculta = useTelaOculta()
    const listaDeTarefas = useListaDeTarefas()
    return {
      telaOculta,
      listaDeTarefas,
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
  },
})
</script>

<style>
.hide{
    display: none !important;
}
.box-tela-oculta{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
}
.box-interna{
    position: absolute;
    width: 60%; 
    height: 70vh; 
    background-color: #84ea52; 
    text-align: center; 
    z-index: 2;
    border-radius: 25px;
    box-shadow: 13px 12px 39px -5px rgba(0,0,0,0.29);
}
.box-interna h1{
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 500;
    margin: 100px auto;
}
.box-interna form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.box-interna form input{
    width: 50%;
    font-size: 2em;
    display: block ;
    margin-top: 50px;
    padding: 10px 30px;
    text-align: center;
    border-radius: 10px;
    border: none;
}
.box-interna form button{
  display: block;
  margin: 100px 0;
  background-color: #67df36;
  border: none;
  box-shadow: none;
  border-radius: 10px;
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 100px;
  font-size: 2.0em;
  text-transform: uppercase;
  font-weight: 500;
}
.box-interna form button:hover{

  cursor: pointer;
 background-color: #4ad41a;
 scale: 1.02;
}

</style>