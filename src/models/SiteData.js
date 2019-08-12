
import axios from 'axios'

import Settings from '../models/Settings'


// helper - converts string dates to javascript dates
// see: https://weblog.west-wind.com/posts/2014/jan/06/javascript-json-date-parsing-and-real-dates

var ISO8601 = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*){0,1})(?:Z|(\+|-)([\d|:]*))?$/;
var dateParser = function (key, value) {
    return typeof value === 'string' && ISO8601.exec(value) ? new Date(value) : value;
};


export default (function () {

    var me = this;
    var guid = "g_6d86e78f_17fa_4cae_9da9_7fdb854ef7bc";
    var url = "https://firebasestorage.googleapis.com/v0/b/oig-nasa-gov.appspot.com/o/data%2FSiteData.json?alt=media";
    var json = localStorage.getItem(guid);
    var data = json ? JSON.parse(json, dateParser) : { items: [] };
    var tombstone = parseInt(localStorage.getItem(guid + '.tombstone') || '0');

    // TODO - Better to update data using a condition GET requests using If-Modified-Since header.
    // Yet, this requires server with same orgin or CORS with both GET and HEAD enabled.
    // see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests

    if (tombstone < Date.now()) {
        axios.get(url).then((response) => {
            if (typeof response.data === 'object') {
                json = JSON.stringify(response.data);
                localStorage.setItem(guid, json);
                data = JSON.parse(json, dateParser);
                localStorage.setItem(guid + '.tombstone', Date.now() + 3600000); // set cache expire tombstone 1-hour
            }
            data = response.data;
        });

    };




    // pages should use filtered item array when displaying records

    data.select = function (options) {

       var today = new Date();
        today.setUTCHours(23, 59, 59, 99, 99);

        // default to user settings when no options provided

        if (typeof options === 'undefined') {
            options = { types: Settings.types };
        }
        else {
            if (typeof options === 'number') options = { types: [options] };
            if (Array.isArray(options)) options = { types: options };
        }

        return data.items.filter((item, index) => {

            return !item.hidden &&
                (item.issued && item.issued.getFullYear) &&   // must have issued date
                (!item.expires || today < item.expires) &&

                // types can be int or string as normalized to string for compare
                (!Array.isArray(options.types) || options.types.indexOf('0') >= 0 || options.types.indexOf('' + item.type) >= 0) &&
                (!Array.isArray(options.topics) || options.topics.indexOf('0') >= 0 || options.topics.indexOf('' + item.topic) >= 0) &&
                (!options.year || options.year === item.issued.getFullYear()) &&
                (!options.video || item.video) &&
                (!options.limit || index <= options.limit)
        });
    }

    data.selected = [];

    return data;


})();



