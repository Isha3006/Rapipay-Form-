let north = ["Ladakh","Jammu & Kashmir", "Himachal Pradesh", "Punjab", "Uttarakhand", "Haryana", "Delhi", "Rajasthan", "Uttar Pradesh", "Chandigarh"]

let east = ["Bihar", "Jharkhand", "Odisha","West Bengal"]

let west = ["Goa","Gujarat","Maharashtra","Dadra and Nager Haveli","Daman and Diu"]

let south = ["Andhra Pradesh","Telangana","Karnataka","Kerala","Tamil Nadu","Andaman and Nicobar Islands","Puducherry","Lakshadweep"]

let central = ["Madhya Pradesh","Chhattisgarh"]

let northeast = ["Assam","Arunachal Pradesh","Manipur","Meghalaya","Mizoram","Nagaland","Tripura","Sikkim"]

window.addEventListener('load', () => {
    let states = [...north, ...east, ...west, ...south, ...central, ...northeast]
    states.sort().forEach(state => {
        let option = document.createElement('option');
        option.innerText = state;
        document.getElementById('states').appendChild(option);
});

    let storage = window.localStorage;
    let ncontent = JSON.parse(storage.getItem("north"));
    if(ncontent != null){
        ncontent.forEach(data => {
        let li = document.createElement("LI");
        li.innerText = data;
        document.getElementById("ncontent").appendChild(li);
        });
    }
    let econtent = JSON.parse(storage.getItem("east"));
    if(econtent != null){
        econtent.forEach(data => {
        let li = document.createElement("LI");
        li.innerText = data;
        document.getElementById("econtent").appendChild(li);
        });
    }
    let wcontent = JSON.parse(storage.getItem("west"));
    if(wcontent != null){
        wcontent.forEach(data => {
        let li = document.createElement("LI");
        li.innerText = data;
        document.getElementById("wcontent").appendChild(li);
        });

    }
    let ccontent = JSON.parse(storage.getItem("central"));
    if(ccontent != null){
        ccontent.forEach(data => {
        let li = document.createElement("LI");
        li.innerText = data;
        document.getElementById("ccontent").appendChild(li);
        });
    }
    let scontent = JSON.parse(storage.getItem("south"));
    if(scontent != null){
        scontent.forEach(data => {
        let li = document.createElement("LI");
        li.innerText = data;
        document.getElementById("scontent").appendChild(li);
        });
    }
});

let checkPhone = () => {
    let phone = document.forms["RegForm"]["Phone"];
    if(String(phone.value.length) != 10){
        phone.style.border = "2px solid red";
    }
    else{
        phone.style.border = "2px solid green";
    }
}

let checkAdhar = () => {
    let adhar = document.forms["RegForm"]["Adhar"];
    if(String(adhar.value.length) != 12){
        adhar.style.border= "2px solid red";
    }
    else{
        adhar.style.border = "2px solid green";
    }
}

let myPan = () => {
    let pan = document.forms["RegForm"]["Pan"];
    if(pan.value.match(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/)){
        pan.style.border = "2px solid green";
        return true;
    }
    else{
        pan.style.border = "2px solid red";
        return false;
    }
}

let myAmount = () => {
    let amount = document.forms["RegForm"]["Amount"];
    if(amount.value.match(/^\d+(\.\d{1,2})?$/)){
        amount.style.border = "2px solid green";
        return true;
    }
    else{
        showMessage("error","Invalid amount");
        amount.style.border = "2px solid red";
        return false;
    }
}



let validation = ()=> {
    let name = 
        document.forms["RegForm"]["Name"];
    let state = 
        document.forms["RegForm"]["State"];
    let phone = 
        document.forms["RegForm"]["Phone"];
    let adhar = 
        document.forms["RegForm"]["Adhar"];
    let pan = 
        document.forms["RegForm"]["Pan"];
    let amount = 
        document.forms["RegForm"]["Amount"];


    if (name.value == "") {
        showMessage("error","Please enter your name.");
        name.focus();
        return false;
    }

    if(!name.value.match(/^[a-zA-Z ]*$/)){
        showMessage("error","Name should be alphabetic");
        name.focus();
        return false;   
    }

    else if (state.value == "") {
        showMessage("error","Please enter your address.");
        state.focus();
        return false;
    }

    else if (adhar.value == "") {
        showMessage("error","Please enter your adhar number.");
        adhar.focus();
        return false;
    }
    else if(String(adhar.value.length) != 12){
        showMessage("error","Adhar Number should be 12 digit long.");
        adhar.focus();
        return false;
    }
    else if (phone.value == "") {
        showMessage("error","Please enter your phone number.");
    }
    else if(String(phone.value.length) != 10){
        showMessage("error","Phone Number should be 10 digit long.");
        phone.focus();
        return false;
    }
    else if (pan.value == "") {
        showMessage("error","Please enter your pan");
        pan.focus();
        return false;
    }
    if(!pan.value.match(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/)){
        pan.focus();
        return false;
    }
    else if (amount.value == "") {
        showMessage("error","Please enter your amount");
        amount.focus();
        return false;
    }
    if(!amount.value.match(/^\d+(\.\d{1,2})?$/)){
        amount.focus();
        return false;
    }

    if(north.includes(state.value)){
        let li = document.createElement("LI");
        li.innerText = `${name.value} - ${state.value} - ${phone.value} - ${adhar.value} - ${pan.value} - ${amount.value} Rs.`;
        document.getElementById("ncontent").appendChild(li);
        store("north",li.innerText);
    }
    else if(east.includes(state.value)){
        let li = document.createElement("LI");
        li.innerText = `${name.value} - ${state.value} - ${phone.value} - ${adhar.value} - ${pan.value} - ${amount.value} Rs.`;
        document.getElementById("econtent").appendChild(li);
        store("east",li.innerText);
    }
    else if(west.includes(state.value)){
        let li = document.createElement("LI");
        li.innerText = `${name.value} - ${state.value} - ${phone.value} - ${adhar.value} - ${pan.value} - ${amount.value} Rs.`;
        document.getElementById("wcontent").appendChild(li);
        store("west",li.innerText);
    }
    else if(central.includes(state.value)){
        let li = document.createElement("LI");
        li.innerText = `${name.value} - ${state.value} - ${phone.value} - ${adhar.value} - ${pan.value} - ${amount.value} Rs.`;
        document.getElementById("ccontent").appendChild(li);
        store("central",li.innerText);
    }
    else if(south.includes(state.value)){
        let li = document.createElement("LI");
        li.innerText = `${name.value} - ${state.value} - ${phone.value} - ${adhar.value} - ${pan.value} - ${amount.value} Rs.`;
        document.getElementById("scontent").appendChild(li);
        store("south",li.innerText);
    }

    document.forms["RegForm"].reset();
}

let store = (id,data)=>{
    let storage = window.localStorage;
    let existing = JSON.parse(storage.getItem(id));
    if(existing == null){
        existing = [];
    }
    existing.push(data);
    storage.setItem(id,JSON.stringify(existing));
}

let showMessage = (type,message) => {
    
    var x = document.getElementById("snackbar");
    if(type=="error")
    {
        x.style.backgroundColor = "red";
    }
    x.className = "show";
    x.innerText = message;
    setTimeout(function(){ 
        x.className = x.className.replace("show", "");
        x.innerText = "";
        x.style.backgroundColor = "black";
    }, 3000);
  }