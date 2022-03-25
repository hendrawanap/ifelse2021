import axios from 'axios';
import Storage from "./Storage";
import Authenticator from "./Authenticator";

const setHeader = (name, value)=>{
    let currentHeaders = getHeaders();
    currentHeaders[name] = value;
    Storage.set('axios-headers', currentHeaders);
};

const removeHeader = (name)=>{
    let currentHeaders = getHeaders();
    if(currentHeaders[name]){
        delete currentHeaders[name];
        Storage.set('axios-headers', currentHeaders);
    }
};

const removeHeaders = ()=>{
    Storage.set('axios-headers', {});
};

const getHeaders = function(){
    let headers = Storage.get('axios-headers');
    return headers? headers: {};
};

const post = function(route, data){
    if(!(data instanceof FormData)){
        let formdata = new FormData();
        for(let i in data){
            let d = data[i];
            if(d instanceof File){
                formdata.append(i, d);
                continue;
            } else if(d instanceof FileList){
                for(let k in d){
                    let file = d[k];
                    if(file instanceof File)
                        formdata.append(`${i}[${k}]`, file);
                }
                continue;
            }
            d = Array.isArray(d) || typeof d === 'object'? JSON.stringify(d): d;
            formdata.append(i, d);
        }
        data = formdata;
    }
    return axios.post(route, data, {
        headers: {
            ...getHeaders(),
            'Content-Length': data.length
        },
    }).then(r=>{
        if(r.error === 'Unauthorized'){
            Authenticator.logout();
        }
        return r;
    });
};

const get = function(route){
    return axios.get(route, {
        headers: getHeaders()
    }).then(r=>{
        if(r.data.error === 'Unauthorized'){
            Authenticator.logout();
        }
        return r;
    });
};

export default {
    get,
    post,

    getHeaders,
    setHeader,

    removeHeaders,
    removeHeader
}
