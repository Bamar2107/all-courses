let employee = {
    ename: "Amar",
    esal: 24000,
    ecity: "Banglore",
    eid: 10012

}
let{ename :  a,esal: b,ecity :c,eid: d} =employee;   /** This is called allias name */
console.log(`Employee id ${d} name is: ${a} he is from ${b}.His salary is ${c}`)