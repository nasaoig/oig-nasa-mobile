
<template>
    <div>
        <div class="h4">Settings</div>

        <div class="my-2">
            <div class="btn btn-outline-primary mr-4" v-on:click="cancel" style="width:8em;">Cancel</div>
            <div class="btn btn-primary" v-on:click="save" style="width:8em;">Save</div>
        </div>
        <strong>Check all the report types that interest you:</strong>

        <div class="h5 mt-2">Inspector General</div>
        <div class="ml-4">
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="1">News
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="5">Testimony
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="2">Semiannual Reports
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="11">Management Challenges
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="7">Special Reports
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="8">Export Compliance
            </label>
        </div>
        </div>

        <div class="h5 mt-2">Office of Audits</div>
        <div class="ml-4">
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="10">Audit Projects
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="3">Audit Reports
            </label>
        </div>
        </div>

        <div class="h5 mt-2">Office of Investigations</div>
        <div class="ml-4">
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="12">Press Releases
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="Settings.types" value="4">Investigations
            </label>
        </div>
        </div>






    </div>
</template>

<style>
    input[type=checkbox] {
        margin-right: 1em;
    }
</style>


<script>

    import Settings from '../models/Settings'

    export default {

        name: 'Settings',

        data: function () {
            return {
                Settings
            }
        },

        methods: {
            cancel() {
                this.$router.push('/');
            },
            save() {
                this.$data.Settings.save();
                alert(this.$data.Settings.types);
                //localStorage.setItem('settings.types', JSON.stringify(this.$data.types));
                this.$router.push('/');
            }
        },
        mounted() {

            //var json = localStorage.getItem('settings.types');
            //this.$data.types = json ? JSON.parse(json) : [];

        }
    }


</script>


