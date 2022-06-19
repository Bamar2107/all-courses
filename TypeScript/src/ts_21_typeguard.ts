interface Admin {
    name:string,
    roles: string[]
}

interface Employee {
    name:string,
    startDate : Date
}

interface superemployee extends Admin,Employee{}

let emp:superemployee ={
    name:'Amarendra',
    roles:['Frontend developer', 'team Lead', 'Scrum Master'],
    startDate: new Date
}

type knownEmployee = Admin & Employee;   //all properties can accessible

type unknownEmployee = Admin | Employee;    //only common properties are accessible


//to access all the properties using (or | ) operator we must use 'in' to check whether the specific property is present in an object or not
 
function printEmployee(emp:unknownEmployee){
    console.log(`Name : ${emp.name}`);    // this is common in both so it can print

    if('roles' in emp){
        console.log(`Roles : ${emp.roles[1]}`);   // this is not present in both so it must be check using in
    }

    if('startDate' in emp){
        console.log(`Joining Date of Employee : ${emp.startDate}`);
        
    }
    
}

printEmployee(emp);
//printEmployee({name:'Amar',startDate: new Date()}) //we can set this way also