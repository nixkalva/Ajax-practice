const ajx = new XMLHttpRequest();


ajx.onreadystatechange = function(){
    console.log(ajx.readystate);
    if(ajx.readyState == 4 && ajx.status == 200){
        document.getElementById('demo').innerHTML = this.responseText;
        console.log(response.txt);
    }
}
ajx.open('get', 'sample.txt', true);
ajx.send();