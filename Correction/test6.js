var a;
var x;
var res;
do{
    a=prompt("Saisir un nombre entier");
    x=parseInt(a);
    res=1;
    for(var i=1;i<=x;i++)
    {
        res=res*i;
    }
}
while(x<0)
document.write(res);


    



