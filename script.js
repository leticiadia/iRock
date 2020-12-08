var userName;

function greetUser() {
   if(navigator.cookieEnabled)
   userName = readCookie('irock_username');

   if(userName)
       alert('Olá ' + userName + ', senti sua falta.');
   else
       alert('Olá, eu sou sua rocha de estimação.');
      
}

function touchRock(){
    if(userName){
        alert('Eu gosto de atenção, ' + userName + '. Obrigada.');
    }else{
        userName = prompt("Qual é o seu nome?", "Digite seu nome aqui");
        if(userName){
            alert("Que bom conhecer você, " + userName + ".");
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

        expires = "; expires=" + date.toGMTString();

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



