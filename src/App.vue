<template>
    <div id="app">

        <div>
            <b-navbar type="dark" style="background-color:#0b3d91;">
                <b-navbar-brand href="#/">
                    <strong>NASA OIG Mobile</strong>
                </b-navbar-brand>
                <b-navbar-nav>
               </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right class="no-caret">
                        <template slot="button-content">
                            <font-awesome-icon icon="ellipsis-v" title="menu"></font-awesome-icon>
                        </template>
                        <b-dropdown-item href="#/">Home</b-dropdown-item>
                        <b-dropdown-item href="#/reports">Reports</b-dropdown-item>
                        <b-dropdown-item href="#/video">Video</b-dropdown-item>
                        <b-dropdown-item href="#/settings">Settings</b-dropdown-item>
                        <b-dropdown-item href="#/about">About</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-navbar>
        </div>

        <!-- Page Content -->
        <div class="container">
            <router-view />
        </div>

    </div>
</template>



<style>
    .no-caret .dropdown-toggle::after {
        content: none;
    }
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