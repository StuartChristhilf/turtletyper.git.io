// TurtleTree.js
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class TurtleTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        this.root = this.insertNode(this.root, data);
    }
    
    insertNode(node, data) {
        if (node === null) {
            return new TreeNode(data);
        }
    
        if (data.length < node.data.length) {
            node.left = this.insertNode(node.left, data);
        } else if (data.length > node.data.length) {
            node.right = this.insertNode(node.right, data);
        } else {
            // Handle a situation where lengths are equal (you can choose how to handle this)
            // In this example, I'm inserting to the right in this case
            node.right = this.insertNode(node.right, data);
        }
    
        return node;
    }

    buildTreeFromFacts(facts) {
        const factsArray = facts.split('\n');
        for (const fact of factsArray) {
            this.insert(fact);
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

    findLeftmostNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    getFirstNode() {
        return this.root;
    }

    getNodeDataAsArray(node) {
        if (node) {
            return node.toArray();
        }
        return [];
    }
}
