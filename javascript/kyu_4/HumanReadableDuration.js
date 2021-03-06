
//URL: https://www.codewars.com/kata/human-readable-duration-format
//kyu: 4


const formatDuration = (sec) => {
    let s = sec;
    if (!s) {
        return 'now'
    }
    let units = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60
    }
    let output = [];
    let years = Math.floor(s / units.year);
    s = years ? s - (years * units.year) : s;
    let days = Math.floor(s / units.day);
    s = days ? s - (days * units.day) : s;
    let hours = Math.floor(s / units.hour);
    s = hours ? s - (hours * units.hour) : s;  
    let minutes = Math.floor(s / units.minute);
    s = minutes ? s - (minutes * units.minute) : s;

    output.push(years, days, hours, minutes, s);
    
    let readable = '';
    output.map((c, i) => {
        if (i === 0 && c) {
            output[i] = c > 1 ? c.toString() + ' years' : c.toString() + ' year';
        } else if (i === 1 && c) {
            output[i] = c > 1 ? c.toString() + ' days' : c.toString() + ' day';
        } else if (i === 2 && c) {
            output[i] = c > 1 ? c.toString() + ' hours' : c.toString() + ' hour';
        } else if (i === 3 && c) {
            output[i] = c > 1 ? c.toString() + ' minutes' : c.toString() + ' minute';
        } else if (i === 4 && c) {
            output[i] = c > 1 ? c.toString() + ' seconds' : c.toString() + ' second';
        }
    })
    output.filter(c => c !== 0).forEach((c,i,a) => {
        if (a.length === 1 || i === 0) {
            readable += c;
            return;
        } else if (a.length > 1) {
            if (i === a.length-1) {
                readable += ' and ' + c;
                return;
            } else if (i > 0) {
                readable += ', ' + c;
                return;
            }
        }
    })
    return readable;
}

console.log(3600*24)

console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(0), 'now');