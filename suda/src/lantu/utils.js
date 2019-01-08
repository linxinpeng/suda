global.utils = {
    cloneObject: function (obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    saveObject: function (key, value) {
        try {
            window.cache = window.cache || {};
            window.cache[key] = value;
            if (typeof(value) == 'object') {
                value._t = new Date().getTime();
            }
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
    
        }
    },
    getObject: function(key) {
        try {
            window.cache = window.cache || {};
            let ret = localStorage.getItem(key);
            if (ret) {
                ret = JSON.parse(ret);
                window.cache[key] = ret;
                return ret;
            }
        } catch (err) {
            if (window.cache[key]) {
                return window.cache[key];
            }
        }
    },
    getUrlParam: function(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return null;
    }, 
    logout: function() {
        utils.saveObject('user', {});
        store.saveUser({});
        router.push('/login');
    },
    parsePath: function(path) {
        let items = path.split("/");
        let pathItems = [];
        let pathParams = {};
        for (let i = 0; i < items.length; i++) {
            let frag = items[i];
            let ii = frag.indexOf('__');
            if (ii > 0) {
                pathParams[frag.substr(0, ii)] = frag.substr(ii+2);
            } else {
                pathItems.push(frag);
            }
        }
        path = pathItems.join("/");
        if (path.length > 1 && path[path.length-1] === '/') {
            path = path.substr(0, path.length-1);
        }
        return {path, params:pathParams};
    },
    
}