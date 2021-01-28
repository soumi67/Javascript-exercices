var n=5;
var nombre;

do{
    var a = prompt("saisir un nombre");
    nombre=parseInt(a);
    if (nombre>n)
    {
        alert("le nombre est plus grand");
    }
    else if(nombre<n)
    {
        alert("le nmbre est plus petit");
    }
    else
    {
        alert("Bravo");
    }
}while(nombre!=n)
