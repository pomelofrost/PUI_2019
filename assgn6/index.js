var cart=[];

// bun object
function Bun(flavor,glazing,quantity){
    this.flavor = flavor;
    this.glazing = glazing;
    this.quantity = quantity;
}

Bun.quantity = "1";
Bun.flavor = "Original Bun";

//Glazing section
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
    //grey out other choices
    document.getElementById("none").style.opacity="0.6";
    document.getElementById("vanilla").style.opacity="0.6";
    document.getElementById("sugar").style.opacity="0.6";
    document.getElementById("chocolate").style.opacity="0.6";
    //add border to the one seleccted, and make opaque
    document.getElementById(Bun.glazing).style.border="solid 3px black";
    document.getElementById(Bun.glazing).style.opacity="1";
}

//when user clicks order
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
    //store to local to transfer between pages
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
    console.log(cart);
}

//shopping cart section
function getCart(){
    //transfer cart items to check out page
    var cart = JSON.parse(localStorage.getItem("shoppingCart"));
    // console.log(cart,cart.length);
    for (i=0; i<cart.length; i++){
        var flavor = cart[i][0];
        var glazing = cart[i][1];
        var quantity = cart[i][2];
        console.log(glazing);
       
    }
    //tabulate display
    document.getElementById("productName").innerHTML = flavor;
    document.getElementById("cartGlazing").innerHTML = glazing;
    document.getElementById("quantitySelect").value = quantity;
}