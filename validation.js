function validate(){
    if(document.myForm.employeeId.value == ""){
        document.getElementById("idErr").innerHTML = "Please enter ID";
        return false;
    }

    if(document.myForm.firstName.value == ""){
        document.getElementById("firstErr").innerHTML = "Please enter first name";
        return false;
    }

    if(document.myForm.lastName.value == ""){
        document.getElementById("lastErr").innerHTML = "Please enter last name";
        return false;
    }

    if(document.myForm.address.value == ""){
        document.getElementById("addressErr").innerHTML = "Please enter address";
        return false;
    }

    if(document.myForm.department.value == ""){
        document.getElementById("departmentErr").innerHTML = "Please enter department";
        return false;
    }

    if(document.myForm.position.value == ""){
        document.getElementById("positionErr").innerHTML = "Please enter position";
        return false;
    }

    if(document.myForm.email.value == ""){
        document.getElementById("emailErr").innerHTML = "Please enter email";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
        alert("Please enter a valid email address");
        return false;
        }
    }

    if(document.myForm.contact.value == ""){
        document.getElementById("contactErr").innerHTML = "Please enter contact number";
        return false;
    }

    if(document.myForm.salary.value == ""){
        document.getElementById("salaryErr").innerHTML = "Please enter salary";
        return false;
    } 


    if(document.myForm.username.value == ""){
        document.getElementById("usernameErr").innerHTML = "Please enter username";
        return false;
    }
}