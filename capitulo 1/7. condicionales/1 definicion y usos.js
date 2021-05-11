
/* es una sentencia que nos permite validar
algo, es ejecutar un bloque. 

{
    alert("hola");
    document.write("pedro");
}

*/

//solo se ejecutan si una condicion se cumple

if (true) {
    alert("hola"); //cumple
}

if (10 < 15) {
    alert("holaaa"); //cunmple
}

// mostrar algo diferente si no se cumple
    // primero = if
    // segundo = else if
    // tercero = else

let nombre = "carlos"
let apellido = " torres"

// if = si esta condicion se cumple muestra esto
if (nombre == "carlos") { 
    document.write("tu nombre es bueno");
} 

// ejecutar un if si los dos juntos son verdaderos
if (nombre == "carlos" && apellido == " torres") {
    document.write("tu nombre y apellido es " + nombre + apellido);
}

// else if = si no vamos a ver si esta condicion se cumple
else if (nombre == "igor") {
    document.write("tu nombre es malo"); //si no se cumple muestra esto
}

// else = y si no se cumple ninguna de las anteriores muestra esto
else {
    document.write("tu nombre es otro");
}
