const set = function(name, value){
    if(Array.isArray(value) || typeof value === 'object'){
        value = JSON.stringify(value);
    }
    localStorage.setItem(name, value);
};

const get = function(name){
    let value = localStorage.getItem(name);
    try {
        value = JSON.parse(value);
    } catch (e) {}
    return value;
};

const unset = function (name) {
    localStorage.removeItem(name);
};

export default {
    set,
    get,
    unset
}
