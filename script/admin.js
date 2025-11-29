let area=document.getElementsByTagName("main");
function addCard(){
let regno=document.getElementById("regno").value;
let category=document.getElementById("category").value;
let driver=document.getElementById("driver").value;
let availability=document.getElementById("availability").value;
let card=document.createElement("div");
card.className="class";
card.innerHTML=`
    
    <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png" width="100px"/>
    <h5>Reg No of Vehicle: ${regno}</h5>
    <h5>category: ${category}</h5>
    <h5 id="drivername">driver: ${driver}</h5>
    <h5>availability: ${availability}</h5>
    <button onclick='driverup()'>Update Driver</button>
    <button onclick='availabilityup()'>change availablity</button>
    <button onclick='delete()'>Delete vehicle</button> 
    `;
    area[0].appendChild(card); 
    function driverup(){
    let name= prompt("new driver name");
    let ele=document.getElementById("drivername");
    ele.textContent=name;
}
}

 

