var EX;
(function (EX) {
    EX[EX["x"] = 0] = "x";
    EX[EX["y"] = 1] = "y";
    EX[EX["z"] = 2] = "z";
})(EX || (EX = {}));
for (var _i = 0, _a = Object.keys(EX); _i < _a.length; _i++) {
    var x_1 = _a[_i];
    console.log('EX[' + x_1 + '] = ' + EX[x_1]);
}
var x = 'this is string';
var y = {};
y['va'] = "s";
console.log('Has own property', y.hasOwnProperty('va'));
console.log(y);
y['va'] = "va";
console.log(y);
// What is Tail Recursion
// properties and methods that''s behaves like static variables
var Counter = (function () {
    function Counter() {
        setInterval(function () {
            //this.increment();
            //console.log('Counter Value = ',this.Value)
        }, 1000);
    }
    Counter.prototype.changeBy = function (val) {
        Counter._counter += val;
    };
    Object.defineProperty(Counter.prototype, "Value", {
        get: function () {
            return Counter._counter;
        },
        enumerable: true,
        configurable: true
    });
    Counter.prototype.increment = function () {
        this.changeBy(1);
    };
    Counter.prototype.decrement = function () {
        this.changeBy(-1);
    };
    Counter._counter = 0;
    return Counter;
}());
export { Counter };
var counter = new Counter();
console.log('counter Value', counter.Value);
var map = function (arr, callback) {
    var length = arr.length;
    var returned = [];
    for (var index in arr) {
        returned.push(callback(arr[index], index, arr));
    }
    console.log(returned);
};
map([1, 2, 5], function (item, index, arr) {
    return item * 5;
});
