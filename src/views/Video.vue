<template>
    <div>
        <div class="h4">
            <font-awesome-icon icon="film" title="menu" class="mr-2"></font-awesome-icon>Video
        </div>
        <div class="list-group" v-for="item in SiteData.select({video:true})" v-bind:key="item.id">
            <div class="list-group-item">
                <div>{{item.issued.toLocaleDateString()}}</div>
                <div><strong>{{item.title}}</strong></div>
                <img v-bind:src="'https://img.youtube.com/vi/' + item.video + '/default.jpg'" style="height:200px;width:auto;" class="rounded mr-2">
                <!--
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" v-bind:src="'https://www.youtube.com/embed/' + item.video + '?rel=0'" allowfullscreen></iframe>
                </div>
                -->
            </div>
        </div>
    </div>
</template>

<script>

    import Settings from '../models/Settings'
    import SiteData from '../models/SiteData'

    var embed = "https://www.youtube.com/embed/{{id}}?rel=0";
    var link = "https://www.youtube.com/watch?v={{id}}&rel=0&autoplay=0";
    var thumb = "https://img.youtube.com/vi/{{id}}/default.jpg";


    export default {
        name: 'video',
        data: function () {
            return {
                SiteData,
                Settings
            }
        }
    }

</script>

