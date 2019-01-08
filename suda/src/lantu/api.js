import axios from 'axios';
import router from '../router';

global.api = {
    async request (path, body) {
        const headers = {
            'Content-Type': 'application/json',
        };
        const user = utils.getObject('user') || {};
        if (user.token) {
            headers['Auth'] = user.token;
        }
        let channel = utils.getObject('channel');
        if (channel) {
            headers['Channel'] = channel;
        }
        return new Promise(function (resolve, reject) {
            axios.post(path, body || {}, {
                headers: headers
            }).then((response)=>{
                if (response.status == 200) {
                    const data = response.data;
                    if (data.status === 0 && data.user) {
                        // console.log('update-user: ' + path + " " + JSON.stringify(data.user));
                        utils.saveObject('user', data.user);
                        store.saveUser(data.user);
                    } else if (data.status == 1012) {
                        // console.log('clear-user: ' + path);
                        utils.saveObject('user', {});
                        store.saveUser({});
                        router.push({
                            path: '/login',
                            query: { redirect: location.pathname }
                        });
                    }
                    resolve(data);
                } else {
                    resolve({status:-1, message:`${response.status}: ${response.statusText}`})
                }
            }).catch(error=>{
                let ret;
                if (error.response) {
                    const response = error.response;
                    ret = ({status:-1, message:`${response.status}: ${response.statusText}`})
                } else {
                    ret = ({status:-1, message:"network error"});
                }
                // console.log(error);
                resolve(ret);
            })
        });
    },
}