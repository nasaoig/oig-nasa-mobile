<template>
    <div>
        <div class="list-group">
            <div v-for="item in items" v-bind:key="item.id" class="list-group-item">
                {{item.title}}
            </div>
        </div>
    </div>
</template>


<script>

    import Settings from '../models/Settings'
    import SiteData from '../models/SiteData'


    export default {

        name: 'test',

        data: function () {
            return {
                site: SiteData,
                items: SiteData.select(),
                Settings
            }
        }
    }



</script>


