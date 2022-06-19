//sync program
// function f1(){
//     console.log('F1 is called');
//     f2();
//     console.log(`F1 is called again`);
// }

// function f2() {
//     console.log(`F2 is called`);
// }

// f1();


//async program
function f1(){
         console.log('F1 is called');
         f2();
         console.log(`F1 is called again`);
     }
    
     function f2() {
      setTimeout(() => {
          console.log(`F2 is called`);
      }, 3000);   
     }
     f1();


