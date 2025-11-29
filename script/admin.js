let area=document.getElementsByTagName("main");
function addCard(){
let regno=document.getElementById("regno").value;
let category=document.getElementById("category").value;
let driver=document.getElementById("driver").value;
let availability=document.getElementById("availability").value;
let card=document.createElement("div");
card.innerHTML;{
    <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png"/>;
    <h5>Reg No of Vehicle: ${regno}</h5>;
    <h5>category: ${category}</h5>;
    <h5>driver: ${driver}</h5>;
    <h5>availability: ${availability}</h5>;
}
area.appendChild(card);  
}
{/* <input type="text" id="regno" placeholder="Reg No of Vehicle"><br><br>
            <select id="category">
                 <option value="category">category</option>
                <option value="Auto">Auto</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bus">Bus</option>
            </select><br><br>
            <input id="driver" type="text" placeholder="driver name"><br><br>
            <select id="availability">
                <option value="Availablility">Availablility</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
            </select><br><br></br> */}