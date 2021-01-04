function doFunction()
        {
             a = Number(document.getElementById('prviBr').value);
             b = Number(document.getElementById('drugiBr').value);
             var uradi = document.getElementById("operacija");
             var stauradi = uradi.options[uradi.selectedIndex].text;
             let c;
             if(stauradi=="Saberi")
             {
                 c=a+b;
             }
             else if(stauradi=="Oduzmi")
             {
                 c=a-b;
             }
             else if(stauradi=="Pomnozi")
             {
                 c=a*b;
             }
             else if(stauradi=="Podjeli")
             {
                 c=a/b;
             }
          
          
          document.getElementById("txtresult").value = c;
        }