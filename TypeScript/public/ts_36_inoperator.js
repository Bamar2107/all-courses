"use strict";
function animal(typeofAnimal) {
    if ('swim' in typeofAnimal) {
        return typeofAnimal.swim();
    }
    else {
        return typeofAnimal.run();
    }
}
