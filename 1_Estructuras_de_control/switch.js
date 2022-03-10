let comidaFavorita = "carne"

switch(comidaFavorita) {
    case "pollo":
    case "pescado":
    case "carne":
        alert("Eres carnivoro")
        break;
     case "acelgas":
     case "lechuga":
        alert("Eres vegetariano")
        break;

     case "tofu":
        alert("Eres vegano")
        break;

        default:
            alert("Eres alien?")
        break;
}
