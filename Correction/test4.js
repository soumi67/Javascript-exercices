var a;
a=prompt("Saisir un nombre entier entre 1 et 10");
var x = parseInt(a);
document.write("<table border='1'>");
for(var i=0;i<11;i++)
{
    document.write("<tr><td>"+x+" * "+i+ " = "+x*i+"</tr></td>");
}
document.write("</table>");