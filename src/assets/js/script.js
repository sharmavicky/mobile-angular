
function validate() {
  var a= document.forms["Form1"]["password"].value;
  var b= document.forms["Form1"]["confirm_password"].value;
  
  
  if ( a!= b) {
   
    document.getElementById("1").innerHTML= "password and confirm password must be same";
    return false;
  }
  }

 
