// TurtleObserver.js
import { PlayerList } from './PlayerList.js';

export class TurtleObserver {//observe
    
    constructor(turtleTree, characterDisplay, updateNodeDisplay) {
        this.turtleTree = turtleTree;//hhi
        this.characterDisplay = characterDisplay;
        this.updateNodeDisplay = updateNodeDisplay;
        
    }

    checkMatchingCharacters() {

        // Get the characters from the PlayerList
        const playerCharacters = PlayerList.getAllCharacters();
    
        // Get the data of the current node from the TurtleTree
        const currentNodeData = this.turtleTree.getCurrentNodeData();
        var cNode = this.turtleTree.getFirstNode();
        // Check if the typed characters exactly match the characters in the current node
        const match = playerCharacters.join('') === cNode.data;
    
        // Update the character display
        this.characterDisplay.textContent = match ? 'MATCH' : 'NO MATCH';
        console.log("Player Characters:", playerCharacters);
        console.log("Current Node Data:", cNode.data);
    
        if (match) {
            
            console.log("same");
            console.log(cNode);
            cNode = cNode.right;
            this.updateNodeDisplay(cNode); // Update the display after moving to the next node
        } else {
            console.log("different");
        }
    }
}