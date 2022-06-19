interface Shape {
     getArea:()=> number;
}

//This is interface concept
class Rectangle implements Shape{
    public constructor(protected readonly width:number, protected readonly height:number){}
    
    public getArea():number{
           return this.height*this.width;
    }
}

const myRect = new Rectangle(10,20);
console.log(myRect.getArea());



//this is inheritance concept
class Square extends Rectangle{
    public constructor(width:number){
          super(width,width);
    }
}

const mysquare = new Square(20);
console.log(mysquare.getArea());
