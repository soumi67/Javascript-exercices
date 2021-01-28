function f1()
{
    var x =1;
    var comp=1;
    do
    {
        for(var i=0;i<11;i++)
        {
            document.write(x+ " * " +i+ " = "+x*i+ "<br>" );
          
        }
        comp++;
        x++;
        document.write("<br>")
        


    }while(comp<11)
}
