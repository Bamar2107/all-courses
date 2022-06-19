interface Length {
    length:number;
}

function getTextAndCount <T extends Length>(element:T){
    let text='';
    if(element.length===1){
        text= `Got 1 element`;
    }
    else if(element.length>1){
        text = `Got ${element.length} element`;
    }
    else{
        text=`Got no element`;
    }
    return[element,text]
}

console.log(getTextAndCount('a'));
