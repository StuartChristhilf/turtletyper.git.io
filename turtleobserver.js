// TurtleObserver.js
import { PlayerList } from './PlayerList.js';

export class TurtleObserver {
    constructor(turtleTree, characterDisplay) {
        this.turtleTree = turtleTree;
        this.characterDisplay = characterDisplay;
    }

    checkMatchingCharacters() {
        const playerCharacters = PlayerList.getAllCharacters();
        const currentNodeData = this.turtleTree.getCurrentNodeData();

        const matchingCharacters = playerCharacters.filter(char => currentNodeData.includes(char));
        this.characterDisplay.textContent = matchingCharacters.join(', ');

        if (matchingCharacters.length === playerCharacters.length) {
            console.log("same")
        } else {
            console.log("different")
        }
    }
}