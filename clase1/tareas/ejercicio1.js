

let diametro = prompt("ingrese un valor que es el diametro de una rueda en metros");
let  grosor = prompt("ingrese un valor que es el grosor de la rueda en metros");

//console.log(diametro,"valor solicitado diametro");
//console.log(grosor,"valor solicitado grosor")


if(diametro > 1.4) {alert("La rueda es para un vehiculo grande");
}  

else
    if (diametro <= 1.4 && diametro > 0.8) {console.log("La rueda es para un vehiculo mediano");
}
    else
        {alert("La rueda es para un vehiculo pequeño");
}

if (diametro  > 1.4 && grosor < 0.4 || diametro  <= 1.4 && diametro > 0.8 && grosor < 0.25 ); 
            {alert("El grosor para esta rueda no es el recomendado");
}
    
