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

export const useListaDeTarefas = defineStore('lista',{
  state: () => ({
    lista: [] as string[],
    indice: 0,
  }),
  actions:{
    adicionarLista( value: string){
      this.lista.push(value)
    },
    removerLista( index: number){
      this.lista.splice(index, 1); // Remove o item pelo índice
    },
    alterarLista(index: number, newValue: string){
      this.lista[index] = newValue
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