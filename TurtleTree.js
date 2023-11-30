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

    setCurrentNode(data) {
        // Helper function to search for a node with matching data
        function searchNode(node, data) {
            if (node === null) {
                return null;
            }

            // Compare the data of the current node with the provided data
            if (node.data === data) {
                return node;
            }

            // Recursively search the left and right subtrees
            const leftResult = searchNode(node.left, data);
            if (leftResult) {
                return leftResult;
            }

            return searchNode(node.right, data);
        }

        // Start the search from the root
        const matchingNode = searchNode(this.root, data);

        if (matchingNode) {
            // Set the matching node as the current node
            this.currentNode = matchingNode;

            // Clear the text box
            document.getElementById("user-input").value = "";

            // Clear the player list
            PlayerList.clear();

            // Update the character display
            updateCharacterDisplay();
        }
    }

    isPlayerInputMatching() {
        const currentNode = this.currentNode;

        if (currentNode) {
            const currentNodeData = currentNode.data;
            const playerInput = PlayerList.getAllCharacters().join('');

            return currentNodeData === playerInput;
        }

        return false;
    }
    
    getCurrentNodeData() {
        if (!this.root) {
            return null;
        }

        // Assuming you want to get the data of the current root node
        return this.root.data;
    }

    getCurrentNode(){
        return this.currentNode;
    }

    moveToNextNode() {
        if (this.currentNode && this.currentNode.right) {
            this.currentNode = this.currentNode.right;
        } else {
            console.log("End of the tree reached.");
        }
    }
}
