
import axios from 'axios'

export default (function () {

    var url = "https://firebasestorage.googleapis.com/v0/b/oig-nasa-gov.appspot.com/o/data%2FSiteData.json?alt=media";
    var data = { items: [] };

    axios.get(url).then((result) => {
        data = result.data;
        data.items = data.items.map((item) => {
            if (item.issued) item.issued = new Date(item.issued);
            if (item.expires) item.expires = new Date(item.expires);
            return item;
        }).filter((item) => {
            return item.issued && !item.hidden;
        })
    });

    var methods = {
        getItems(typeId) {
            var id = parseInt(typeId || '0');
            if (isNaN(id) || id < 0 || id > 20) id = 0;
            return data.items.filter((item) => {
                return !id || id === item.type;
            })
        }

    }


    return methods;


})();