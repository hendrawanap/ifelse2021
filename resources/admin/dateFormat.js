const dateFormat = function(){

    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    let parseFromString = function(str, ds){

        console.log(ds);

        let formatted = '';

        for(let i = 0; i < str.length; i++){

            let addition = 0;
            let newStr = str.substring(i, str.length);

            if(newStr.startsWith('dddd')){
                addition = 4;
                formatted += days[ds.day];
            } else if(newStr.startsWith('ddd')){
                addition = 3;
                formatted += days[ds.day].substring(0, 3);
            } else if(newStr.startsWith('dd')){
                addition = 2;
                formatted += pad(ds.date, 2);
            } else if(newStr.startsWith('d')){
                addition = 1;
                formatted += ds.date;
            }

            if(newStr.startsWith('mmmm')){
                addition = 4;
                formatted += months[ds.month];
            } else if(newStr.startsWith('mmm')){
                addition = 3;
                formatted += months[ds.month].substring(0, 3);
            } else if(newStr.startsWith('mm')){
                addition = 2;
                formatted += pad(ds.month, 2);
            } else if(newStr.startsWith('m')){
                addition = 1;
                formatted += ds.month;
            }

            if(newStr.startsWith('YYYY')){
                addition = 4;
                formatted += pad(ds.year, 4);
            } else if(newStr.startsWith('YY')){
                addition = 2;
                formatted += pad(ds.year % 100, 2);
            }

            if(newStr.startsWith('HH')){
                addition = 2;
                formatted += pad(ds.hour, 2);
            } else if(newStr.startsWith('H')){
                addition = 1;
                formatted += ds.hour;
            }

            if(newStr.startsWith('MM')){
                addition = 2;
                formatted += pad(ds.minute, 2);
            } else if(newStr.startsWith('M')){
                addition = 1;
                formatted += ds.minute;
            }

            if(newStr.startsWith('ss')){
                addition = 2;
                formatted += pad(ds.second, 2);
            } else if(newStr.startsWith('s')){
                addition = 1;
                formatted += ds.second;
            }

            if(addition === 0){
                formatted += str.charAt(i);
            } else {
                i += addition-1;
            }
        }

        return formatted;
    };

    let parse = function(dateString){

        let dateTime = dateString;

        if(typeof dateString === 'string')
            dateTime = new Date(dateString);

        function make(dateTime){
            let day = dateTime.getDay();
            let date = dateTime.getDate();
            let month = dateTime.getMonth();
            let year = dateTime.getFullYear();
            let second = dateTime.getSeconds();
            let minute = dateTime.getMinutes();
            let hour = dateTime.getHours();
            return {day, month, year, second, minute, hour, date};
        }

        function get(){
            return make(dateTime);
        }

        function format(str='dd mm YYYY'){
            return parseFromString(str, make(dateTime));
        }

        function combine(dateString){
            if(typeof dateString === 'string'){
                return combine(make(new Date(dateString)));
            }

            let self = get();

            if(dateString.year === self.year){
                if(dateString.month === self.month){
                    if(dateString.day === self.day){
                        if(dateString.hour === self.hour){
                            if(dateString.minute === self.minute){
                                if(dateString.second === self.second){
                                    return 0;
                                } else
                                return dateString.second > self.second? -1: 1;
                            } else
                            return dateString.minute > self.minute? -1: 1;
                        } else
                        return dateString.hour > self.hour? -1: 1;
                    } else
                    return dateString.day > self.day? -1: 1;
                } else
                return dateString.month > self.month? -1: 1;
            } else
            return dateString.year > self.year? -1: 1;
        }

        function gte(dateString){
            let c = combine(dateString);
            return c >= 0;
        }

        function gt(dateString){
            let c = combine(dateString);
            return c > 0;
        }

        function lte(dateString){
            let c = combine(dateString);
            return c <= 0;
        }

        function lt(dateString){
            let c = combine(dateString);
            return c < 0;
        }

        function eq(dateString){
            let c = combine(dateString);
            return c === 0;
        }

        function diff(dateString){
            if(typeof dateString === 'string'){
                dateString = make(new Date(dateString));
            }

            let self = get();

            let year, month, date, hour, minute, second;


            year = self.year - dateString.year;
            month = self.month - dateString.month;
            date = self.date - dateString.date;
            hour = self.hour - dateString.hour;
            minute = self.minute - dateString.minute;
            second = self.second - dateString.second;

            if(second < 0){
                second += 60;
                minute--;
            }

            if(minute < 0){
                minute += 60;
                hour--;
            }

            if(hour < 0){
                hour += 24;
                date--;
            }

            if(date < 0){
                date += monthDays[self.month===0?11:self.month-1];
                month--;
            }

            if(month < 0){
                month += 12;
                year--;
            }

            return {
                year:year<0?year+1:year, month, date, hour, minute, second
            }

        }

        function getSecondsDiffFromFirstYear(dateTime){
            let isLeap = dateTime.year % 4 === 0;
            let seconds = dateTime.second;
            seconds += dateTime.minute * 60;
            seconds += dateTime.hour * 3600;
            seconds += (dateTime.date-1) * 86400;
            let monthDay = monthDays.filter((v,i) => i < dateTime.month);
            monthDay = monthDay.length? monthDay.reduce((total, v) => total+v): 0;
            seconds += monthDay * 86400;
            seconds += isLeap && dateTime.month > 1? 86400: 0;
            return seconds;
        }

        function diffInSeconds(dateString){

            if(typeof dateString === 'string'){
                dateString = make(new Date(dateString));
            }
            let self = make(dateTime);

            let _diffSelf = getSecondsDiffFromFirstYear(self);
            let _diffDateString = getSecondsDiffFromFirstYear(dateString);

            let yearDiff = diff(dateString).year;

            let res = _diffSelf - _diffDateString;

            if(yearDiff === 0){
                return res;
            }


            if(yearDiff > 0)
                for(let i = self.year; i < self.year+yearDiff; i++){
                    if(i % 4 === 0){
                        res -= 366*86400;
                    } else {
                        res += 365*86400;
                    }
                }
            else
                for(let i = dateString.year; i > dateString.year+yearDiff; i--){
                    if(i % 4 === 0){
                        res -= 366*86400;
                    } else {
                        res -= 365*86400;
                    }
                }


            return res;

        }

        return {
            format,
            gte,
            gt,
            lte,
            lt,
            eq,
            diff,
            diffInSeconds
        }


    };

    return {
        parse
    }





};


export default dateFormat();
