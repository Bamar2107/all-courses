type Fish = {
    swim: () => void
}

type Cheetah = {
    run : () => void
}

function animal(typeofAnimal: Fish | Cheetah){
     if('swim' in typeofAnimal){
        return typeofAnimal.swim();
     }
     else{
         return typeofAnimal.run();
     }
}

