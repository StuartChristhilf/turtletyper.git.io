// TurtleObserver.js
import { PlayerList } from './PlayerList.js';

export class TurtleObserver {//observe
    constructor(turtleTree, characterDisplay) {
        this.turtleTree = turtleTree;
        this.characterDisplay = characterDisplay;
    }

    checkMatchingCharacters() { //checks if playlist and first node match.
        const playerCharacters = PlayerList.getAllCharacters();
        const currentNodeData = this.turtleTree.getCurrentNodeData();

        const matchingCharacters = playerCharacters.filter(char => currentNodeData.includes(char));
        this.characterDisplay.textContent = matchingCharacters.join(', ');
        console.log("Player Characters:", playerCharacters);
        console.log("Current Node Data:", currentNodeData);

        if (matchingCharacters.length === playerCharacters.length) {
            console.log("same")
        } else {
            console.log("different")
        }
    }
}