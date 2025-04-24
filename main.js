// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//     case 0:
//         alert("0");
//         break;
//     case 1:
//         alert("1");
//         break;
//     case 2:
//     case 3:
//         alert("2 jr 3");
//         break;
//     default:
//         alert("Not good")                
// }

// function hello(name = "Anonimus", age = "hz scolko") {
//     alert(`hello, ${name}, You ${age} years old`);
// }

// hello("John", 30);
// hello();

// function checkAge1(age) {
//     return (age > 18) ? true : 
//     confirm("Roditeli разрешили?");
//   }
//   checkAge1()

  

  function checkAge2() {
    let age = prompt("Your age?");
    let res = age > 18 || confirm("Родители разрешили?");
    alert(res);
  } 
  
  checkAge2()
  
  function min(a, b) {
    alert(a > b ? b : a)
  }

  min(2, 5)
  min(2, 1)
  min(-1, 1)

  

  function pow() {
    let x = prompt("x?")
    let n = prompt("n?")
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *=x;
    }

    alert(res)
  }

  pow(3, 3)