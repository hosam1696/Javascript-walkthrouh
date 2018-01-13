Object.defineProperty(String.prototype, 'strip',
    {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function (reg) {
            reg = reg ? new RegExp(reg, 'gi') : /^\s+|\s+$/gi;
            return this.replace(reg, '')
        }
    }
);

let str = '  hoasm ekdfs  ';
str.strip() // with no rgs act like trim() 
str.strip('s') // remove all 's' from the string
