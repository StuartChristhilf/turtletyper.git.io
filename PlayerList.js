export const PlayerList = {
    dataStructure: [],
    add: function(value) {
        this.dataStructure.push(value);
    },
    delete: function(index) {
        if (index >= 0 && index < this.dataStructure.length) {
            this.dataStructure.splice(index, 1);
        }
    },
    resize: function(newSize) {
        // Implementation for resizing an array
    },
    check: function() {
        // Implementation for checking array
    },
    getAllCharacters: function() {
        return this.dataStructure;
    }
};


