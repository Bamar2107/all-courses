interface Horse {
    runningSpeed:number;
    type:'horse';
}

interface Bird{
    flyingSpeed:number;
    type:'bird';
}

interface Snake{
    crawlingSpeed:number;
    type:'snake';
}

const horse :Horse={
    runningSpeed:80,
    type:'horse'
}

const snake:Snake={
    crawlingSpeed:12,
    type:'snake'
}

const bird:Bird ={
    flyingSpeed:60,
    type:'bird'
}
type Animal = Horse | Bird | Snake;

function speedOfAnimal(animal:Animal){

    let speed =0;
    switch(animal.type){
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