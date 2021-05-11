//comparan dos expresiones y devuelven un valor booleano
    //que representa la relacion de sus valores

// devuelven true o false

let num1 = 23;
let num2 = 13;
document.write(num1 == num2) // Equality (a == b) si son iguales


let num1 = 23;
let num2 = 13;
let texto = "texto 1"
let texto2 = "texto 2"
document.write(texto != texto2) //inequality (a != b) si son distintos


let num1 = 23;
let num2 = 13;
let texto = "23"
let texto2 = "texto 2"
document.write(texto === num1) //Identify (a === b) si son estrictamente iguales con el mismo tipo de dato y valor


let num1 = 23;
let num2 = 13;
let texto = "23"
let texto2 = "texto 2"
document.write(texto !== num1) //Non-indentify (a !== b) si no es estrictamente igual, si no es el mismo tipo o numero


let num1 = 23;
let num2 = 13;
let resultado = num1 > num2;
document.write(resultado)   // Greater than (a > b) mayor que
                            //              (a >= b) mayor o igual que
                            //              (a < b) menor que
                            //              (a <= b) menor o igual que