interface Container{
    data: number | undefined | null;
}

function multipleFactor(element: Container, factor:number){
    if(element.data!=null){
     element.data *= factor;
    }
}

