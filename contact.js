function change1(){
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var mail = document.getElementById("email").value;
    var  telephone = document.getElementById("phone").value;
    var mess = document.getElementById("Message").value;
    if(firstname.length<5){
        event.preventDefault();
        alert("There must be atleast 5 characters in First name");
        return;
    }
    if(lastname.length<5){
        event.preventDefault();
        alert("There must be atleast 5 characters in Last name");
        return;                
    }
    if(mail.indexOf(".") === -1){
        event.preventDefault();
        alert("Invalid email address");
        return;
    }
    if( telephone.length<10){
        event.preventDefault();
        alert("Invalid Phone number");
        return;
    }
    if(mess.length<50){
        event.preventDefault();
        alert("Query must contain atleast 50 characters.");
        return;
    }
}