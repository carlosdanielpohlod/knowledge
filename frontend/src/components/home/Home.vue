<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />
        <UserAdmin/>
        
    </div>
</template>

<script>

import PageTitle from '@/components/template/PageTitle' 


import UserAdmin from '@/components/admin/UserAdmin'
export default {
    
    name: 'Home',
    components: {PageTitle,UserAdmin}
    
    
}
</script>

<style>
   
</style>