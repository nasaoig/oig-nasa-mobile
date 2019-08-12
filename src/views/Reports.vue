<template>
    <div>
        <div class="mb-1">
            Only most recent items displayed. For complete information visit: <a href="https://oig.nasa.gov" target="_blank">https://oig.nasa.gov</a>
        </div>
        <div class="list-group" v-for="item in items" v-bind:key="item.id">
            <div class="list-group-item">
                <div class="float-right">{{item.issued.toLocaleDateString()}}</div>
                <div><strong>{{item.name}}</strong></div>
                <div><strong>{{item.title}}</strong></div>
                <p>
                   <img class="img-thumbnail"  v-if="item.image" v-bind:src="'https://oig.nasa.gov/docs/' + item.image" style="margin-right:0.5em;height:100px;width:auto;float:left;">

                {{item.summary}}
                </p>
                <div class="text-right">
                    <a v-bind:href="'https://oig.nasa.gov/docs/' + item.file" target="_blank" v-if="item.file">Report</a>
                    <a v-bind:href="item.link" target="_blank" v-if="item.link">Link</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style>

</style>


<script>

    import SiteData from '../models/SiteData'
    import Settings from '../models/Settings'


    export default {

        data: function () {
            return {
                SiteData,
                Settings,
                items: SiteData.select()
            }
        },

        methods: {

            /*
            update(items) {

                var json = localStorage.getItem('settings.types');
                var types = json ? JSON.parse(json) : [];

                // use cache on empty 
                if (!items || !items.length) {
                    json = localStorage.getItem('data.items');
                    items = json ? JSON.parse(json) : [];
                }

                // convert dates and filter
                this.$data.items = items.map((item) => {
                    if (item.issued) item.issued = new Date(item.issued);
                    if (item.expires) item.expires = new Date(item.expires);
                    return item;
                }).filter((item) => {
                    return item.issued && !item.hidden && (types.length === 0 || types.indexOf('' + item.type) >= 0);
                });

                if (this.$data.items.length > LIMIT) this.$data.items.length = LIMIT;

                // cache original data
                localStorage.setItem('data.items', JSON.stringify(items));
                
            },


            load() {

                var me = this;
                var url = "https://firebasestorage.googleapis.com/v0/b/oig-nasa-gov.appspot.com/o/data%2FSiteData.json?alt=media";

                var cacheExpires = parseInt(sessionStorage.getItem('cacheExpires') || '0');

                //console.info(cacheExpires, Date.now());

                if (cacheExpires <= Date.now()) axios.get(url).then((response) => {
                    me.update(response.data.items);
                    sessionStorage.setItem('cacheExpires', Date.now() + 3600000); // hour in miliseconds
                });
            }
            */

        },
        mounted() {

            alert(SiteData.select().length);

            // use cached data on startup when available
            //this.update();
            //this.load();
        }
     }

</script>