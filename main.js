function querySAFunc(a,b, message) {
    a +=b;
    var s = document.querySelectorAll(a,b,message);

    for(var i = 0;i<s.length;i++) {
        s[i].innerHTML = message;
    }
}
querySAFunc('div', '.output',"function works");

function querySimple(a) {
   return document.querySelectorAll(a);
}

//build out this function to add more features
function mySelection() {
    var a = document.getElementById('queryStuff').value;
    var qs = querySimple(a);
    var holder = "Results<br/>";

    for(var i = 0;i<qs.length;i++) {
        holder += qs[i].innerText + '<br/>';
    }
    document.getElementById('message').innerHTML = holder;
}