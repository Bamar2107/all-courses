function Counter(){
var count =0;

    this.IncrementCounter = () =>{
        count++;
        console.log(count);    
    }
    this.DecrementCounter = () =>{
        count--;
        console.log(count);    
    }
}
var counter1= new Counter();
counter1.IncrementCounter();
counter1.IncrementCounter();
counter1.IncrementCounter();
counter1.DecrementCounter();
