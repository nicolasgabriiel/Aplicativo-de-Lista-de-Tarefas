<template>
  <div>
    <section class="caixa-botao">
      <button type="button" @click="telaOculta.mostrarTelaOculta" :disabled="!telaOculta.ocultar">Criar Nova Lista de
        Tarefas</button>
    </section>
    <ul class="listas">

      <li v-for="(item, index) in listaDeTarefas.lista" :key="index">
        {{ item }}
        <button @click="listaDeTarefas.removerLista(index)">Remover</button>
        <button @click="editarLista(index)">Editar</button>
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

    }
  }
})
</script>