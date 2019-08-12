
export default  (function () {

    var guid = "g_1aa4ae80_a352_407a_ad1b_e06a3908f0b8";

    var props = {

        // Add user cached user settings here

        types: [],
        topics: [],
        theme: '',
        maxItems: 25

    }

    props.save = function () {
        var json = JSON.stringify(props);
        localStorage.setItem(guid, json);
    }

    // load or create settings cache

    var json = localStorage.getItem(guid);

    if (json) {
        var cache = JSON.parse(json);
        for (var key in props) {
            if (props.hasOwnProperty(key) && cache[key]) props[key] = cache[key];
        }
    }
    else props.save(); 

    return props;

})();