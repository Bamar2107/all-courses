"use strict";
//This is interface concept
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
//this is inheritance concept
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const mysquare = new Square(20);
console.log(mysquare.getArea());
