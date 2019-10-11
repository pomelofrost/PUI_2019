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
    //clear border styling
    document.getElementById("none").style.border="none";
    document.getElementById("vanilla").style.border="none";
    document.getElementById("sugar").style.border="none";
    document.getElementById("chocolate").style.border="none";
    //add border to the one seleccted
    document.getElementById(Bun.glazing).style.border="solid 3px black";
    document.getElementById(Bun.glazing).style.opacity="1";
}

function order(){
    var quantitySelect = document.getElementById("quantitySelect").value;
    Bun.quantity = quantitySelect;
    //checks if all inputs are finished
    if(typeof Bun.glazing !== "undefined"){
        //add to cart
        cart.push([Bun.flavor, Bun.glazing, Bun.quantity]);
        //store this data
    }
    document.getElementById("cartNum").innerHTML = cart.length;
    document.getElementById("cartNum").style.display = "inline-block";
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
    console.log(cart);
}


function getCart(){
    //transfer cart items to check out page
    var cart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(cart,cart.length);
    for (i=0; i<cart.length; i++){
        var flavor = cart[i][0];
        var glazing = cart[i][1];
        var quantity = cart[i][2];
        console.log(glazing);
       
    }
    document.getElementById("cartGlazing").innerHTML = glazing;
}