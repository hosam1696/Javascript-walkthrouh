/**
*   # Module pattern
     simple way to encapsulate methods
        creates a "toolbox" of functions to use



 */


const repo = function () {
    let datastore = {};
    let id = 0;

    let add = function(val) {
        datastore[id+=2] = val;
        return this;
    };

    let get = function(id) {
        console.log(datastore);
        if (!datastore[id]) {
            return null
        }

        return datastore[id]

    };

    return {
        add: add,
        get: get,
        datastore
    }
};
let repoExec = repo();
repoExec.add('hoasm').add('Menna');;


let [hosamID, mennaID] = [repoExec.get('2'), repoExec.get('4')];

hosamID
mennaID