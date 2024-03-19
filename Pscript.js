
function LValidate(thisform) {
    if(thisform.email.value == null || thisform.email.value ==""){
        alert("Please enter your Email, This field is required!")
        thisform.email.focus();
        return false;
            }
    else if(thisform.password.value == null || thisform.password.value ==""){
                alert("Please enter the Password, This field is required!")
                thisform.password.focus();
                return false;
                    }
    
}
      