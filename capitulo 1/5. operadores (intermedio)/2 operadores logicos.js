//nos devuelve un resultado a partir de que se cumpla (o no) una condicion,
    //su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos

//solo funciona con valores logicos


// var valor = true;
// var valor2 = true; 🠋🠋🠋🠋🠋🠋

// var resultado = valor && valor2; // && si las dos condiciones son verdaderas o iguales da TRUE y si una es falsa da FALSE
    num1 = 12;
    num2 = 24;
    afirmacion1 = num1 < num2;
    afirmacion2 = num1 != num2;
    document.write(afirmacion1 && afirmacion2);


// var resultado2 = valor || valor2; // || si cualquiera de las dos son verdaderas es TRUE si las son falsas es FALSE
    num1 = 12;
    num2 = 24;
    afirmacion1 = num1 > num2;
    afirmacion2 = num1 == num2;
    document.write(afirmacion1 || afirmacion2);


//var resultado3 = !valor; // ! regresar los contrario de lo que le devuelvo
    num1 = 12;
    num2 = 24;
    afirmacion1 = num1 < num2;
    afirmacion2 = num1 == num2;
    document.write(! false); // si es true devuelve false y si es false devuelve true




    // num1 = 12;
    // num2 = 24;

    // document.write(num1 < num2 || num1 == num2);


// mesclar operaciones
    num1 = 12;
    num2 = 24;
    num3 = 25;
    num4 = 92;
    num5 = 91;

    op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
    op = true;

    document.write(op)