function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm(form) {
    var email = form.elements["email"].value;
    var mobile = form.elements["mobile"].value;
    var emailErr = false;
    var mobileErr = false;

    if(email == "") {
        printError("emailErr", "Please enter your email address");
        emailErr = true;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            emailErr = true;
        } else {
            printError("emailErr", "");
        }
    }
    
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        mobileErr = true;
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            mobileErr = true;
        } else {
            printError("mobileErr", "");
        }
    }
    
    if(emailErr || mobileErr) {
        return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +  
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n";
        alert(dataPreview);
        return true;
    }
}
