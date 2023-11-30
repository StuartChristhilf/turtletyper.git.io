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
        const cNode = this.turtleTree.getCurrentNode();
        // Check if the typed characters exactly match the characters in the current node
        const match = playerCharacters.join('') === currentNodeData;
    
        // Update the character display
        this.characterDisplay.textContent = match ? 'MATCH' : 'NO MATCH';
        console.log("Player Characters:", playerCharacters);
        console.log("Current Node Data:", currentNodeData);
    
        if (match) {
            console.log("same");
            this.turtleTree.moveToNextNode(); // Move to the next node
            this.updateNodeDisplay(); // Update the display after moving to the next node
        } else {
            console.log("different");
        }
    }
}