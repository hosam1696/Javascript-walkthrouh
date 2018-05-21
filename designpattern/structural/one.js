/**
 *  Decorator Pattern
 *      used to add new functionality to an existing object without being obtusive
 *      more complete inheritance
 *      wraps an object
 *      protect existing objects
 *      allow extemded functionality
 */

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        this.completed = true;
    }
    save() {
        console.info('> task "' + this.name + '" is completed!');
    }
}
// legacy task
let myTask = new Task('Ordinary Task');
myTask.complete();
myTask.save();

// urgent task
let urgentTask = new Task('Urgent Task');
urgentTask.priority = 1;
urgentTask.notify = function () {
    console.info('Notify this task', this.name);
}
urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this)
    //this.save()
}

// new urgent task
class NewUrgentTask extends Task {
    constructor(name) {
        super(name);
    }

    log(user) {
        console.info(user + ' logged!');
    }
}

let newUrgentTask = new NewUrgentTask('new urgent task');
 

newUrgentTask.save();
newUrgentTask.log('Hosam')




