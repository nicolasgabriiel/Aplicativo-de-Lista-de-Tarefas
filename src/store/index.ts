import { defineStore } from 'pinia'

export const useListaDeTarefas = defineStore('lista',{
  state: () => ({
    listas: [] as Array<{ name: string; tarefas: string[] }>,
    indice: 0,
  }),
  actions: {
      // this.listas.push({ name: 'NovaLista', tarefas: [] });
      // this.listas[0].tarefas.push('tarefa1')
    adicionarLista( value: string){
      this.listas.push({ name: value, tarefas: [] })
    },
    removerLista( index: number){
      this.listas.splice(index, 1); // Remove o item pelo índice
    },
    alterarLista(index: number, newValue: string){
      this.listas[index] = { name: newValue, tarefas: [] }
    },
    adicionarTarefa(value: string, index: number ){
      this.listas[index].tarefas.push(value)
    },
    removerTarefa(indexTarefa: number){
      this.listas[this.indice].tarefas.splice(indexTarefa, 1)
    },
    teste(){
      this.listas.push({ name: 'lista', tarefas: [] })
      console.log(this.listas[0].name)
    },
  }
})

export const useTelaOculta = defineStore('tela', {
  state: () => ({
    ocultar: true,
  }),
  actions:{
    mostrarTelaOculta(){
      this.ocultar = false
    },
    ocultarTelaOculta(){
      this.ocultar = true
    }
  }
})
export const useTelaEdit = defineStore('edit', {
  state: () => ({
    ocultar: true,
  }),
  actions:{
    mostrarTelaEdit(){
      this.ocultar = false
    },
    ocultarTelaEdit(){
      this.ocultar = true
    }
  }
})