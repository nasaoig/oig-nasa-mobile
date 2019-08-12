
// Record class - not currently used

export default Item = function(value) {

    // private props

    var _hidden = false;
    var _issued = new Date();
    var _expires = new Date(9999, 12, 31, 23, 59, 99, 99);
    var _type = 0;
    var _topic = 0;

    // public props

    var props = {

        name: '',
        title: '',
        summary: '',
        video: '',
        file: '',
        link: '',
        image: '',

        get hidden() {
            return _hidden;
        },
        set hidden(value) {
            _hidden = !!value;
        },
        get issued() {
            return _issued;
        },
        set issued(value) {
            var d = new Date(value);
            if (!isNaN(+d)) _issued = d;
        },
        get expires() {
            return _expires;
        },
        set expires(value) {
            var d = new Date(value);
            if (!isNaN(+d)) _expires = d;
        },
        get type() {
            return _type;
        },
        set type(value) {
            var n = parseInt((value || '0').toString());
            if (!isNaN(n) && n >= 0) _type = n;
        },
        get topic() {
            return _topic;
        },
        set topic(value) {
            var n = parseInt((value || '0').toString());
            if (!isNaN(n) && n >= 0) _topic = n;
        }
    }

    // optional - clone from existing

    if (typeof value === 'object') {

        props.hidden = value.hidden;
        props.expires = value.expires;
        props.issued = value.issued;
        props.type = value.type;
        props.topic = value.topic;

        props.file = value.file || '';
        props.image = value.image || '';
        props.link = value.link || '';
        props.name = value.name || '';
        props.summary = value.summary || '';
        props.title = value.title || '';
        props.video = value.video || '';

    }

    return props;


};