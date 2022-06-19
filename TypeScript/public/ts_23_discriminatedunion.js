"use strict";
const horse = {
    runningSpeed: 80,
    type: 'horse'
};
const snake = {
    crawlingSpeed: 12,
    type: 'snake'
};
const bird = {
    flyingSpeed: 60,
    type: 'bird'
};
function speedOfAnimal(animal) {
    let speed = 0;
    switch (animal.type) {
        case 'horse':
            speed = animal.runningSpeed;
            break;
        case 'snake':
            speed = animal.crawlingSpeed;
            break;
        case 'bird':
            speed = animal.flyingSpeed;
            break;
    }
    console.log(`Speed of the animal is ${speed}`);
}
speedOfAnimal(horse);
speedOfAnimal(bird);
