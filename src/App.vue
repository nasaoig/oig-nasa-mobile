<template>
    <div id="app">
        <div class="p-2 text-light" style="background-color: #0b3d91">
            <div class="h4 text-center">NASA OIG Mobile
                <router-link to="/settings" class="btn btn-outline-light float-right">Settings</router-link>
            </div>
            
        </div>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
<style>
</style>
<script>


    //import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    //import Datepicker from 'vuejs-datepicker'
    //import PortalVue from 'portal-vue'
    // Vue.use(BootstrapVue);

    export default {
        name: 'App',
        methods: {
            select: function (e) {
                this.$router.push('/reports/' + e.target.value);
            }
        }
    }



</script>