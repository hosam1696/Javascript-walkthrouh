let obj = {};
const print = console.log;
// creational pattern

let newobj = Object.create(obj);

obj.foo = true;

let is = newobj.hasOwnProperty('foo');

if (newobj.foo) {
    console.log(newobj)
}

let Task = function (name) {
  this.name = name;
  this.completed = false;
};

Task.prototype = {
  complete: function () {
      this.completed = true;
      console.info('Task completed');
  },
  save : function () {
    console.info('saving entry:')
  }
};


const task1 = new Task('First Task');

task1.complete();