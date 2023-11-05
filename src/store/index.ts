import { defineStore } from 'pinia'

export const useTelaOculta = defineStore('tela', {
  state: () => ({
    ocultar: true,
  }),
  actions:{
    mostrarTelaOculta(){
      this.ocultar = false
      console.log(this.ocultar)
    },
    ocultarTelaOculta(){
      this.ocultar = true
      console.log(this.ocultar)
    }
  }
})

export const ListaDeTarefas = defineStore('lista',{
  state: () => ({
    lista: [],
  }),
  actions:{
    adicionarLista(){
      console.log('funcionando')
    }
  }
})