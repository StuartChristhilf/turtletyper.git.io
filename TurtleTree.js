const fs = require('fs');

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class TurtleTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data.length < node.data.length) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    getAllCharacters() {
        const result = [];
        this.inOrder(this.root, result);
        return result;
    }

    inOrder(node, result) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.data);
            this.inOrder(node.right, result);
        }
    }
}

const turtleTree = new TurtleTree();


const fileContent = fs.readFileSync('turtlefacts.txt', 'utf8');
const facts = fileContent.split('\n').filter(Boolean);


facts.forEach((fact) => {
    turtleTree.insert(fact);
});

const sortedFacts = turtleTree.getAllCharacters();
console.log('Sorted Facts:', sortedFacts);
