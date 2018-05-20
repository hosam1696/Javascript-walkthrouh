/**
    # singleton pattern
        used to restrict an object too ne instance of that object across the application
            remembers the last time you used it, hand the same instance back

 */


let singletonTask = (function () {
    let repo;
    function createRepo() {
        let task = new Object('task');
        return task
    }
    return {
        getInstance: function () {
            if(!repo) {
                repo = createRepo()
            }
            return repo
        }
    }
})();

let s1 = singletonTask.getInstance();
let s2 = singletonTask.getInstance();

s1
s2