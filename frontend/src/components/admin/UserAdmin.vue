<template>
    <div class="article-admin">
        <b-table hover striped :fields="fields" :items="users"></b-table>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit"/>
    </div>
</template>

<script>

import {baseApiUrl} from '@/global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    
    data: function(){
        return {
            mode: 'save', 
            user: {},
            users: [],
            page:1,
            limit:0,
            count:0,
            fields: [
                {key:'id', label:'Codigo', sortable: true},
                {key:'name', label:'Nome', sortable: true},
                {key:'email', label:'E-mail', sortable: true},
                {key:'admin', label:'Administrador', sortable: true, formatter: value => value ? 'Sim':'Não'},
                {key:'actions', label:'Ações'}
            ]
        }
    },
    methods: {
        loadUsers() {
           const url = `${baseApiUrl}/users?page=${this.page} `
            
            
            axios.get(url, {
                headers:{
                    'authorization':"bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkNhcmxvcyBEYW5pZWwiLCJlbWFpbCI6ImNhcmxvc3BvaGxvZEBnbWFpbC5jb20iLCJhZG1pbiI6MCwiaWF0IjoxNjE3MDY1MTYyLCJleHAiOjE2MTczMjQzNjJ9.wdBpaZVnzD235__mtEz7TWQzVP0q8CUlDh488FUcr-g"
                }
            }).then(res => {
                this.users = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
                // console.log(this.users)
            })
        }
    },
    watch: {
        page(){
            this.loadUsers()
        }
    },
    mounted(){
        
        this.loadUsers()
    }
}
</script>

<style>

</style>