// We can build a class represintin BST binary search tree
const {Set, Map} = require('immutable');


let m1 = Map({a:'aaa', b:'bbb'});
let m2 = m1.setIn('b', 'cccc');

console.log(`${m1} vs ${m2}`);

let om1 = {a:'aaa', b:'bbb'};
let om2 = {...om1, ...{b:22}};

console.log(om1, om2)
/*
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}



class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let n = new Node(data, null, null);
        
        if (!this.root) {
            this.root = n
        } else {
            let current = this.root;
            let parent;
            if(data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break
                }
            } else {
                current = current.righ;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
        

    }

    inOrder(node) {
        if(!(node == null)) {
            inOrder(node.left);
            nod
        }
    }
}
*/