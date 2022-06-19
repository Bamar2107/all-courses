"use strict";
//Decorators are extending feature of a class or we can say decorators are the function which call outside from a class.
//In simple words decorators are the piece of code wrapping inside a function.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//To create decorator, decorator itself accepts few agrumemnts to used as a decorators
//decorators executes top to bottom approach but function inside decorators are execute bottom to top approaches
function LogOne(title) {
    return function (constructor) {
        console.log(`loggerOne function`);
    };
}
function LogTwo(title) {
    return function (constructor) {
        console.log(`loggerTwo function`);
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Amar';
        console.log(`Objtect Creation through constructor`);
        console.log(`My Name is ${this.name}`);
    }
};
Person = __decorate([
    LogOne('Decorator Execution One........'),
    LogTwo('Decorator Execution Two.........')
], Person);
let man = new Person();
