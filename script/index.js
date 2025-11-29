
var btn=document.getElementById("btn");
btn.addEventListener("submit",function(){
var emailva=document.getElementById("email").value;
var passwordva=document.getElementById("password").value;
if(emailva==="admin@gmail.com" && passwordva==="admin1234"){
    alert("Login success");
    window.location.href="admin.html";
}
else{
    alert("wrong email or password");
}

})
