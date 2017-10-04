function chunk(arr, limit) {
    let length = arr.length;
    let chunked = [];
    let start = 0;
    
    while (start < length) {

    chunked.push(arr.slice(start,limit+start));
    start+=limit
    }

    return chunked;
}


let arr = ['sdas','dasdas','xxx','asdasd',5465,16554,'asdas'];

console.log(chunk(arr, 2));
