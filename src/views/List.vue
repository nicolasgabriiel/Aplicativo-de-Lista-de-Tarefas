<template>
    <div class="home-page">
        <HeaderComponent/>
        <ContainerList/>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/Home/HeaderComponent.vue';
import FooterComponent from '@/components/Home/FooterComponent.vue';
import ContainerList from '@/components/List/ContainerList.vue';


export default defineComponent({
    name: 'List-Page2',
    components:{
    HeaderComponent,
    FooterComponent,
    ContainerList
}

})
</script>

<style>
@import 'reset-css'; 
.home-page{
    min-height: 100vh;
    width: 100%;
    background-color:#bdff8a;
    font-size: 12px;
}
</style>