function validate(){ 
 
    var username = document.getElementById("txtuser").value; 
     
    var password = document.getElementById("txtpass").value; 
    
    var errorMSG =  document.getElementById("errorMsg"); 

    if ((username == "User" && password == "Password1")){ 
     
   // alert ("Login successfully"); 
    errorMSG.textContent="Login Successful";
    location.href ="page.html";
        } 
     
        else{ 
            if(username==""||password=="")
                errorMSG.textContent="Username and/or password must not be empty";
                
            else   
            errorMSG.textContent="Invalid username or password combination";
                
     
        } 
     
        return false; 
     
        }