class Course{
    title:string;
    price:number;

    constructor(title:string, price:number){
        this.title=title;
        this.price=price;
    }
}

const form = document.querySelector('form')!;

form.addEventListener('submit', event =>{
    event.preventDefault();

    const coursename = document.getElementById('course') as HTMLInputElement;
    const coursefees = document.getElementById('price') as HTMLInputElement;

    const course = coursename.value;
    const fees = +coursefees.value;

    const coursedetails = new Course(course,fees);
    console.log(coursedetails);
    



});