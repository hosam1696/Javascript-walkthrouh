"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client() {
        this.prop = 'a class property';
    }
    Client.prototype.Prop = function (prop) {
        this.prop = prop;
    };
    return Client;
}());
exports.Client = Client;
var Server = (function () {
    function Server() {
        this.title = 'server class';
    }
    return Server;
}());
exports.Server = Server;
