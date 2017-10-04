var Client = (function () {
    function Client() {
        this.prop = 'a class property';
    }
    Client.prototype.Prop = function (prop) {
        this.prop = prop;
    };
    return Client;
}());
var Server = (function () {
    function Server() {
        this.title = 'server class';
    }
    return Server;
}());
export { Server };
