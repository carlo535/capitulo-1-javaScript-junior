dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
dineroPedro = prompt("¿Cuanto dinero tienes Pedro?");
dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");

dineroCofla = parseInt(dineroCofla); // convierte "3" a 3

// Dinero roberto

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("roberto comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("roberto comprate el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("roberto comprate el helado de heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("roberto comprate el helado de heladovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("roberto comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto comprate el helado de confites o de 1/4 Kg");
} else {
    alert("losiento no te alcanza");
}

//Dinero pedro

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("pedro comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("pedro comprate el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("pedro comprate el helado de heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("pedro comprate el helado de heladovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("pedro comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro comprate el helado de confites o de 1/4 Kg");
} else {
    alert("losiento no te alcanza");
}

//Dinero cofla

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate el helado de agua");
    //saber el vuelto cofla
    alert("y te sobra" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("comprate el helado de crema");
    //saber el vuelto cofla
    alert("y te sobra" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("cofla comprate el helado de heladix");
    //saber el vuelto cofla
    alert("y te sobra" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("cofla comprate el helado de heladovich");
    //saber el vuelto cofla
    alert("y te sobra" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("cofla comprate el helado de helardo");
    //saber el vuelto cofla
    alert("y te sobra" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("cofla comprate el helado de confites o de 1/4 Kg");
    //saber el vuelto cofla
    alert("y te sobra " + (dineroCofla - 2.9));
} else {
    alert("losiento no te alcanza");
}



