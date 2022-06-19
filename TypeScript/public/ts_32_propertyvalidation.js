"use strict";
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const coursename = document.getElementById('course');
    const coursefees = document.getElementById('price');
    const course = coursename.value;
    const fees = +coursefees.value;
    const coursedetails = new Course(course, fees);
    console.log(coursedetails);
});
