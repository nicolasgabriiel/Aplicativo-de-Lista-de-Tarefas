<template>
    <div>
        <HeaderComponent/>
        <PrincipalComponent/>
        <AddComponent/>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/Home/HeaderComponent.vue';
import PrincipalComponent from '@/components/Home/PrincipalComponent.vue';
import AddComponent from '@/components/Home/AddComponent.vue';
import FooterComponent from '@/components/Home/FooterComponent.vue';

export default defineComponent({
    name: 'Home-Page1',
    components:{
        HeaderComponent,
        PrincipalComponent,
        AddComponent,
        FooterComponent
    }

})
</script>