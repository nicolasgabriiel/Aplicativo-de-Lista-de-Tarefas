<template>
    <footer class="footer">
        <div class=" linha"></div>
        <p>TaskNest todos os direitos reservados ©</p>
    </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Footer-Component'
})
</script>

<style>
.footer{
    position: fixed;
    display: block;
    bottom: 0;
    width: 100%;
}
.footer p{
    text-align: center;
    font-size: 1em;
    padding: 30px 0;
}
.linha{
    width: 100%;
    height: 1px;
    background-color:#a0f46e;
}

</style>