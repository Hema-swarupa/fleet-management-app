let emailva=document.getElementById("email").value.trim();
let passwordva=document.getElementById("password").value.trim();
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
if(emailva==="admin@gmail.com" && passwordva==="admin1234"){
    alert("Login success");
}
else{
    alert("wrong email or password");
}

})
