// TurtleObserver.js
import { PlayerList } from './PlayerList.js';

export class TurtleObserver {//observe
    constructor(turtleTree, characterDisplay) {
        this.turtleTree = turtleTree;//hhi
        this.characterDisplay = characterDisplay;
    }

    checkMatchingCharacters() {
        // Get the characters from the PlayerList
        const playerCharacters = PlayerList.getAllCharacters();
    
        // Get the data of the current node from the TurtleTree
        const currentNodeData = this.turtleTree.getCurrentNodeData();
    
        // Check if the typed characters exactly match the characters in the current node
        const match = playerCharacters.join('') === currentNodeData;
    
        // Update the character display
        this.characterDisplay.textContent = match ? 'MATCH' : 'NO MATCH';
        console.log("Player Characters:", playerCharacters);
        console.log("Current Node Data:", currentNodeData);
    
        if (match) {
            console.log("same");
        } else {
            console.log("different");
        }
    }
}