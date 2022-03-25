const randomize = function(){
    let getRandom = function(min, max){
        return Math.round(Math.random()*(max - min) + min);
    };
    let color = function(){
        let red =  getRandom(0, 255);
        let green =  getRandom(0, 255);
        let blue = getRandom(0, 255);

        let toRGB = function(){
            return 'rgb(' + [red,green,blue].join(',') + ')';
        };

        let toRGBA = function(a=1){
            return 'rgba(' + [red,green,blue,a].join(',') + ')';
        };

        return {
            toRGB,
            toRGBA,
            red,
            green,
            blue
        }
    }

    return {
        color,
    }
};

export default randomize();
