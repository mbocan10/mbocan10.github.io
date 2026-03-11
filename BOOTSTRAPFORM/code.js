function checkEmail()
{


   var email =  document.getElementById("email").value;
   var confirm = document.getElementById("confirm").value;

    if(email  == "")
   {
     document.getElementById("email-error").innerHTML = "Please fill in this field";
    }
   else
   {
       document.getElementById("email-error").innerHTML = "";
    }

 if(confirm == "")
   {
      document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }
 else
   {
      document.getElementById("confirm-error").innerHTML = "";
    }

 if( email != confirm)
   {
       document.getElementById("email-error").innerHTML = "both emails must be the same";
       document.getElementById("confirm-error").innerHTML = "both emails must be the same";
    }
}

function pizzaOrder()
{
    var output = "<h3>Pizza Order: ";

    if( document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if( document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else
    {
        output += " Large ";
    }

    if( document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni ";
    }

    if( document.getElementById("sausage").checked == true)
    {
        output = output + " sausage ";
    }

    if( document.getElementById("mushrooms").checked == true)
    {
        output = output + " mushrooms ";
    }

    document.getElementById("output").innerHTML = output + "</h3>";
}
