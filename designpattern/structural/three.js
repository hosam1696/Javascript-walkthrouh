//@ts-check
/**
 *  Flyweight Pattern
 * 
 * 
 * 
 */

class Tassk {
    constructor(data) {
        Object.assign(this, flyWeightFactory.get(data))
     }
}
 
let flyWeightFactory = function () { 
    let flyWeights = {};

    function get(data) {
        let values = Object.values(data).join();
        if (!flyWeights[values]) {
            flyWeights[values] = new Tassk(data);
        }
        return flyWeights[values];
    }

    function getCount () {
        return Object.keys(flyWeights).length;
    }

    return {
        get: get,
        getCount: getCount
    }
}();

let startMem = process.memoryUsage().heapUsed / 1000000;
startMem

for (let i = 1; i < 10; i++) {
    new Tassk({name:'fsdfs', priority:0})
}
let count = flyWeightFactory.getCount();
count
let endMem = process.memoryUsage().heapUsed / 1000000;
endMem