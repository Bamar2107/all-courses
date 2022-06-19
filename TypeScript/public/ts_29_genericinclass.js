"use strict";
class DataStroage {
    constructor() {
        this.data = [];
    }
    addData(item) {
        this.data.push(item);
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return [...this.data];
    }
}
const personData = new DataStroage();
personData.addData('Amar');
personData.addData('Anil');
personData.addData('Nirmala');
personData.addData('Ashok');
personData.removeData('Amar');
console.log(personData.getData());
