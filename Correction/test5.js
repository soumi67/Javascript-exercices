function f1()
{
   
    var x =1;
    var comp=1;
    do
    {
        document.write("<table border='1'>")
        for(var i=0;i<11;i++)
        {
            document.write("<tr><td>"+x+ " * " +i+ " = "+x*i+ "</td></tr>" );
          
        }
        comp++;
        x++;
        document.write("</table>")
        document.write("<br>")
        


    }while(comp<11)
}
