const _ = require('lodash');
let arr = [16,96];

let cap = _.capitalize("hoikkmsd;lf sdjfhkhj");
const capitalize = str => str.replace(/\b[a-z]/g, c=>'<'+c.toUpperCase()+'>');

let cap2 = capitalize('Hosam elnabawy Ahmed and menna allah mohamed');
cap2

let concated = _.concat(arr, 'hosam', 'menna', 2020);

console.log(concated);

let finded = _.findIndex(arr, (x)=>x <20);

console.log(finded, arr[finded]);

console.log(_.chunk(concated, 2));

function slice(arr, start, end) {
    let index = -1;
    let length = (arr == null) ? 0 : arr.length;
    console.log(length);
    end = arr.length;
    end = end > length? length : end;
    console.log(end);
    length = (start > end) ? 0 : ((end - start) >>> 0);
    let result = Array(length);
    console.log(length);
    while(++index < length) {
        result[index] = arr[start+index];

    }
    return result
}

console.log(slice([1, 2, 3, 4], 3))