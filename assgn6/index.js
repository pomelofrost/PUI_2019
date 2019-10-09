var cart=[];

// bun object
function Bun(flavor,glazing,quantity){
    this.flavor = flavor;
    this.glazing = glazing;
    this.quantity = quantity;
}

Bun.quantity = "1";
Bun.flavor = "original";
// validate form


function none(){
    Bun.glazing = "none";
}
function vanilla(){
    Bun.glazing = "vanilla";
}
function sugar(){
    Bun.glazing = "sugar";
}
function chocolate(){
    Bun.glazing = "chocolate";
}

function addGlazing(){
    console.log(Bun.flavor, Bun.glazing, Bun.quantity);
    document.getElementById("none").style.border="none";
    document.getElementById("vanilla").style.border="none";
    document.getElementById("sugar").style.border="none";
    document.getElementById("chocolate").style.border="none";
    document.getElementById(Bun.glazing).style.border="solid 3px black";
    document.getElementById(Bun.glazing).style.opacity="1";
}

function order(){
    var quantitySelect = document.getElementById("quantitySelect").value;
    Bun.quantity = quantitySelect;

    if(typeof Bun.glazing !== "undefined"){
        cart.push([Bun.flavor, Bun.glazing, Bun.quantity]);
    }

    document.getElementById("cartNum").innerHTML = cart.length;
    document.getElementById("cartNum").style.display = "inline-block";
}