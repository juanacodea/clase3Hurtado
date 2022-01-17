let color = prompt ("elija un color primario o secundario") .toUpperCase();
while (color !=""){

    switch (color){
        case "ROJO":
            alert("es un color primario ");
            break;
        case "AMARILLO":
            alert("es un color primario ");
            break;
        case "AZUL":
            alert("es un color primario ");
            break;
        case "NARANJA":
            alert("amarillo + rojo");
            break;
        case "VIOLETA":
            alert("azul + rojo");
            break;
        case "VERDE":
            alert("amarillo + azul");
            break;
        default:
            alert("ese color no se ni primario ni secundario");
            break;   
    }
    color = prompt ("elija un color primario o secundario") .toUpperCase();
}
