let dater = ()=>{

    let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
    let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    let parse = function(dateString){
        let splitDate = dateString.split('T')[0].split('-');
        let splitTime = dateString.split('T')[1].split('\.')[0].split(':');

        let year = parseInt(splitDate[0]);
        let month = parseInt(splitDate[1]);
        let day = parseInt(splitDate[2]);
        let hour = parseInt(splitTime[0]);
        let minute = parseInt(splitTime[1]);
        let second = parseInt(splitTime[2]);

        return {
            year, month, day, hour, minute, second
        }
    };


    let getRange = function(min, max){

        let curr = (max.year - min.year) * 31557600;
        curr += (max.month - min.month) * 2629800;
        curr += (max.day - min.day) * 86400;
        curr += (max.hour - min.hour) * 3600;
        curr += (max.minute - min.minute) * 60;
        curr += max.second - min.second;

        return curr;
    };

    let parseFromRange = function(initial, range){
        let p = range;
        let year = Math.floor(initial.year + (p / 31557600));
        p = (p) % 31557600;

        let month = Math.floor(initial.month + (p / 2629800));
        p = (p + Math.floor(month/12)) % 2629800;


        let day = Math.floor(initial.day + (p / 86400));
        p = (p + Math.floor(day/30)) % 86400;

        let hour = Math.floor(initial.hour + (p / 3600));
        p = (p + Math.floor(hour/24)) % 3600;

        let minute = Math.floor(initial.minute + (p / 60));
        p = p % 60;

        let second = Math.floor(initial.second + (p));

        minute += second%60>0?second/60:0;
        second = second%60;

        hour += minute%60>0?minute/60:0;
        minute = minute%60;

        day += hour%24>0?hour/24:0;
        hour = hour%24;

        month += day%30>0?day/30:0;
        day = day%30;

        year += month%12>0?month/12:0;
        month = month%12;

        let c = {year, month, day, hour, minute, second};
        for(let i in c){
            c[i] = Math.floor(c[i]);
        }

        return c;
    };

    let createRange = function(min, max, length=12, arrayDate=[]){

        min = parse(min);
        max = parse(max);
        let parsedArray = arrayDate.map(date=>parse(date));

        let range = getRange(min, max);
        let splitRange = {};

        parsedArray.forEach(p=>{
            let currRange = getRange(min, p);
            for(let i = 0; i < length; i++){
                let minRange = (i) * (range / length);
                let maxRange = (i + 1) * (range / length);

                if(!splitRange[minRange]){
                    splitRange[minRange] = 0;
                }

                if(currRange <= maxRange && currRange > minRange){

                    splitRange[minRange]++;
                    break;
                } else if(i === 0 && currRange === minRange){
                    splitRange[minRange]++;
                    break;
                }
            }
        });

        let newSplit = [];

        for(let i in splitRange){
            let parsedRange = parseFromRange(min, i);

            let label = '';
            if(range > 31557600 + length * 2629800){
                label = months[parsedRange.month-1] + ' ' + parsedRange.year;
            } else if(range > 2629800 + length * 86400){
                label = parsedRange.day + ' ' + months[parsedRange.month-1];
            } else if(range > 86400 + length * 3600){
                label = parsedRange.day + ' ' + months[parsedRange.month-1] + ' - ' + parsedRange.hour + ':00';
            } else if(range > 3600 + length * 60){
                label = parsedRange.hour + ':' + parsedRange.minute;
            } else {
                label = parsedRange.hour + ':' + parsedRange.minute + ':' + parsedRange.second
            }
            newSplit.push({label, value: splitRange[i]})
        }

        return newSplit
    };

    return {
        createRange
    }

};

export default dater();
