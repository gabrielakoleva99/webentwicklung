var login_attempts=3;

function validate(){
    
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    
    if(username=="admin" && password=="admin"){
         window.alert("login succesfully")
         window.location.href = "file:///C:/Users/1/Desktop/HTW/webentwicklung/prototype/assignment2/admin.html";
        return false;
    }
    else{
        login_attempts--;
        alert("You have " + login_attempts + "  attempts left");
        if(login_attempts==0){
            document.getElementById("username").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("submit").disabled=true;

        }
        return false;
    }

    function signin_validate(){
        var username=document.getElementById("susername").value;
        var password=document.getElementById("spassword").value;
    
        
        if(username=="staff" && password=="staff"){
             window.alert("login succesfully")
             window.location.href = "file:///C:/Users/1/Desktop/HTW/webentwicklung/prototype/staff.html";
            return false;
        }
        else{
            login_attempts--;
            alert("You have " + login_attempts + "  attempts left");
            if(login_attempts==0){
                document.getElementById("susername").disabled=true;
                document.getElementById("spassword").disabled=true;
                document.getElementById("submit").disabled=true;
    
            }
            return false;
        }
    }
}

