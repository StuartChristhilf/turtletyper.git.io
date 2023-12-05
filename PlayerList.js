export const PlayerList = {
    dataStructure: [],
    add: function(value) {
        this.dataStructure.push(value);
    },
    deleteLast: function() {
        if (this.dataStructure.length > 0) {
            this.dataStructure.pop();
        }
    },
    getAllCharacters: function() {
        return this.dataStructure;
    },
    clearList: function() {
        this.dataStructure = [];
    }
};


