<template>
    <div class="home-page">
        <HeaderComponent/>
        <PrincipalComponent/>
        <AddComponent/>
        <EditComponent/>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/Home/HeaderComponent.vue';
import PrincipalComponent from '@/components/Home/PrincipalComponent.vue';
import AddComponent from '@/components/Home/AddComponent.vue';
import FooterComponent from '@/components/Home/FooterComponent.vue';
import EditComponent from '@/components/Home/EditComponent.vue';

export default defineComponent({
    name: 'Home-Page1',
    components:{
    HeaderComponent,
    PrincipalComponent,
    AddComponent,
    FooterComponent,
    EditComponent
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