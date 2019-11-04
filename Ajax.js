function commonAjax(url, process){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(this.readyState == 4  && this.status == 200){
            try{
                process(this);
            }
            catch(err){
                console.log(err.message);

            }
        }
        
    }
    xhr.open('get',url);
    xhr.send();
 var url = "https://api.github.com/users";
 function getUsers(ajx){
     var users = JSON.parse(ajx.responseText);
     var output = "<div id='users'>";
     for(u of users){
         console.log(u);
         output += "<div class = 'uid'>"+u.login + "</div> <img src= '"+u.avatar_url+"'>";
     }

     
 }
 commonAjax(url,getUsers);
