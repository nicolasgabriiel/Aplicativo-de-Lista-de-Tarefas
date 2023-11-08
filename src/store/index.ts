import { defineStore } from 'pinia'

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

interface ListaItem{
  name: string
  tarefas:string[]
}

export const useListaDeTarefas = defineStore('lista',{
  state: () => ({
    lista: [] as string[],
    indice: 0,
    tarefas: [] as string [][],
    testeLista: [] as string[][],
    ListaItem: [] as <ListaItem>[],


  }),
  actions: {
    adicionarTarefa(value: string, index: number ){
      console.log('Lista Antiga: '+ this.tarefas)
      this.tarefas[index].push(value)
      console.log('Nova Lista: '+ this.tarefas)
    },
    removerTarefa(index: number){
      this.tarefas.splice(index, 1)
    },
    adicionarLista( value: string){
      this.lista.push(value)
    },
    removerLista( index: number){
      this.lista.splice(index, 1); // Remove o item pelo índice
    },
    alterarLista(index: number, newValue: string){
      this.lista[index] = newValue
    },
    teste(){
     
      this.ListaItem.push({name:'lista1', tarefas: ['']})
      console.log(this.ListaItem)
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

 // this.lists[0].tarefas.push('itemteste');
      // this.lists[0].tarefas.splice(1, 1);
      // this.lists.push({ name: 'Lista3', tarefas: [] });