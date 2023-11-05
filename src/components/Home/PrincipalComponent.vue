<template>
    <div>
        <section class="caixa-botao">
            <button type="button" @click="telaOculta.mostrarTelaOculta" :disabled="!telaOculta.ocultar" >Criar Nova Lista de Tarefas</button>
        </section>
        <section class="listas">
        </section>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useTelaOculta } from '../../store/index'

export default defineComponent({
    name: 'Principal-Component',
    setup() {
    const telaOculta = useTelaOculta()
    return {
      telaOculta
    }
  },
})
</script>