let allMeta = {
    'title': (a) => addTitle(a),
    'description': (a) => insertMeta('description', a),
    'tags': (a) => insertMeta('tags', a),
    'og:title': (a) => insertMeta('og:title', a, 'property'),
    'og:description': (a) => insertMeta('og:description', a, 'property'),
    'og:image': (a) => insertMeta('og:image', a, 'property'),
};

const addMeta = function(matchedRoute){
    let meta = matchedRoute.find(record=>record.meta);
    if(!meta) return;
    meta = meta.meta;
    console.log(meta);
    for(let i in meta){
        if(allMeta[i]){
            allMeta[i](meta[i]);
        }
    }
};

const insertMeta = function(metaName, metaValue, qualifiedName = 'name'){
    let meta = document.querySelector(`meta[${qualifiedName}="${metaName}"]`);
    if(!meta){
        meta = document.createElement('meta');
    }

    meta.setAttribute(qualifiedName, metaName);
    meta.setAttribute('content', metaValue);
    document.head.append(meta);
};

const addTitle = function(title){
    document.title = title;
};

export default {
    addMeta
}

