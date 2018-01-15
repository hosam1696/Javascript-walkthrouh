"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var x;
var myObj = { name: 'Hosam', age: 21, gender: 'male' };
var myLove = __assign({}, myObj, { lover: 'menna allah' });
console.log('%c%s', 'font-size: 25px;color: cyan', 'New Object rest params');
console.group();
console.log(myLove);
var count = function () { var x = 0; for (var i = 0; i < 600; i++) {
    x = i;
} return x; };
/*
(async function X () {
    const t = performance.now();
    
    let x = await count();
    console.log(x);
    console.log(performance.now()-t);
}());

*/
var Test = (function () {
    function Test() {
        this._user = 'Hosam';
    }
    Test.prototype.log = function (x) {
        return "you have entered " + x + " --Thanks Back Tecks";
    };
    Object.defineProperty(Test.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (userName) {
            this._user = userName;
        },
        enumerable: true,
        configurable: true
    });
    return Test;
}());
var testedClass = new Test();
console.log('class user ', testedClass.user);
testedClass.user = 'Menna Allah';
console.log(testedClass.user);
var NewClass = (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super.call(this) || this;
        _this.super = _this = _super.call(this) || this;
        _this.super.name = 'Shimaa Elmenshawy';
        console.log('New class and super together', _this.super.user);
        return _this;
    }
    return NewClass;
}(Test));
var newClass = new NewClass();
function insideOne(one, two, three, four, five, six, seven, eight) {
    //let [one, two, three , four, five, six, seven, eight] = args;
    console.log("This is from first function " + arguments + "\n    five number is " + five + "\n    eight value is " + eight + "\n    ");
}
function one(one, two, three, four, five, six, seven, eight) {
    console.log(Array.prototype.slice.call(arguments), Array.from(arguments));
    ///insideOne(...arguments);
}
one('4554Hosam', 'two', 'three', 4, 'five', 'six', 7, 8);
/*
function fab() {
    let result = [];
    let first = 1;
    let last = 0;

    while (last < 100) {
        result.push(last);
        last = first;
        last += first;
    
        }
        return result;
}
console.log(fab())

}*/
//const Fetch = import('../node_modules/node-fetch')
