var userName;

function greetUser() {
   if(navigator.cookieEnabled)
   userName = readCookie('irock_username');

   if(userName)
       alert('Hello' + userName + ', I missed you.');
   else
       alert('Hello, i am your pet rock.');
      
}

function touchRock(){
    if(userName){
        alert('I like attention, ' + userName + '. Thanks.');
    }else{
        userName = prompt("What is your name?", "Enter your name here");
        if(userName){
            alert("Nice to meet you, " + userName + ".");
        if(navigator.cookieEnabled)
            writeCookie("irock_username", userName, 1 * 24 * 1000);
        else
            alert('Sorry. Cookies arent supported/enabled in your browser. I wont remember you later.');
            
        }
    }
    document.getElementById("rockImg").src = "img/rock_happy.png";
    setTimeout("document.getElementById('rockImg').src = 'img/rock_sad.jpg';", 5 * 60 * 1000);
}

function resizeRock() {
    document.getElementById('rockImg').style.height = (document.body.clientHeight - 100) * 0.9;
}

function writeCookie(name, value, days) {
    var expires = "";

    if(days){
        var date = new Date();
        
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        expires = "; expires=" + date.toUTCString();

    }

    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name){
    var searchName = name + "=";
    var cookies = document.cookie.split(';');

    for(var i=0;  i < cookies.length; i++){
        var c = cookies[i];

        while(c.charAt(0) == ``)
        
        c = c.substring(1, c.length);

        if(c.indexOf(searchName) == 0)
        return c.substring(searchName.length, c.length);
    }
    return null;
}

function eraseCookie(name){
    writeCookie(name, "", -1);
}



