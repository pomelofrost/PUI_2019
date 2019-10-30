var cart=[];
var wishList=[];

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
    document.getElementById("productDisplay").src="img/bun.png";
}
function vanilla(){
    Bun.glazing = "vanilla";
    document.getElementById("productDisplay").src="img/original_vanilla.png";

}
function sugar(){
    Bun.glazing = "sugar";
    document.getElementById("productDisplay").src="img/original_sugar.png";
}
function chocolate(){
    Bun.glazing = "chocolate";
    document.getElementById("productDisplay").src="img/original_chocolate.png";
}

function addGlazing(){
    console.log(Bun.flavor, Bun.glazing, Bun.quantity);
    //grey out other choices
    document.getElementById("none").style.opacity="0.6";
    document.getElementById("vanilla").style.opacity="0.6";
    document.getElementById("sugar").style.opacity="0.6";
    document.getElementById("chocolate").style.opacity="0.6";
    // make selected option opaque
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
    //display cart num
    document.getElementById("cartNum").innerHTML = cart.length;
    document.getElementById("cartNum").style.display = "inline-block";
    //tabulate display
    var parentDiv = document.getElementsByClassName("left")[0];
    parentDiv.innerHTML = "";
    console.log(cart);
    for (i=0; i<cart.length; i++){
        var flavor = cart[i][0];
        var glazing = cart[i][1];
        var quantity = cart[i][2];
        //add html to each bun//
        var left = document.getElementsByClassName("left")[0];
        //create big div
        var item = document.createElement("div");
        item.setAttribute("class","product");
        item.setAttribute("id","item"+i);
        //add product image
        var imgNode = document.createElement('img');
        //img source based on glazing
        imgNode.setAttribute("src","img/original_"+glazing+".png");
        //create secondary div
        var smallDiv = document.createElement('div');
        //display flavor
        var productName = document.createElement('h3');
        productName.innerHTML = flavor;
        //add a span to group descriptions
        var desSpan = document.createElement('span');
        //display glazing
        var glazingDes = document.createElement('p');
        glazingDes.innerHTML = "Glazing:";
        var cartGlazing = document.createElement('p');
        cartGlazing.innerHTML = glazing;
        //display quantity select menu
        var quanSpan = document.createElement('span');
        //display glazing
        var quanDes = document.createElement('p');
        quanDes.innerHTML = "Quantity:";
        var quantitySelect = document.createElement('select');
        var option1 = document.createElement('option');
        var option2 = document.createElement('option');
        var option3 = document.createElement('option');
        var option4 = document.createElement('option');
        option1.innerHTML = "1";
        option1.setAttribute("value","1");
        option2.innerHTML = "3";
        option2.setAttribute("value","3");
        option3.innerHTML = "6";
        option3.setAttribute("value","6");
        option4.innerHTML = "12";
        option4.setAttribute("value","12");

       
        //display delete button
       var deleteButton = document.createElement("button");
       var trashIcon = document.createElement("i");
       trashIcon.setAttribute("class","far fa-trash-alt");

       deleteButton.value = i;
       deleteButton.addEventListener("click",function(){
           deleteItem(deleteButton.value)
       });

       //append everything
        left.appendChild(item);
        item.appendChild(imgNode);
        item.appendChild(smallDiv);
        smallDiv.appendChild(productName);
        smallDiv.appendChild(desSpan);
        desSpan.appendChild(glazingDes);
        desSpan.appendChild(cartGlazing);
        smallDiv.appendChild(quanSpan);
        quanSpan.appendChild(quanDes);
        quanSpan.appendChild(quantitySelect);
        quantitySelect.appendChild(option1);
        quantitySelect.appendChild(option2);
        quantitySelect.appendChild(option3);
        quantitySelect.appendChild(option4);
        quantitySelect.value = quantity;
        smallDiv.appendChild(deleteButton);
        deleteButton.appendChild(trashIcon);
    }
}

function deleteItem(index){
    //remove item from cart
    var cart = JSON.parse(localStorage.getItem("shoppingCart"));
    cart.splice(index-1,1);
    localStorage.setItem("shoppingCart",JSON.stringify(cart));    //repopulate page
    getCart();
}

function addToWishlist(){
    //checks if all inputs are finished
    if(typeof Bun.glazing !== "undefined"){
        //add to cart
        wishList.push([Bun.flavor, Bun.glazing]);
        //store this data
    }
    //store to local to transfer between pages
    localStorage.setItem("wishList",JSON.stringify(wishList));
    console.log(wishList);
}

function getWishlist(){
    //transfer wishlist items to check out page
    var list = JSON.parse(localStorage.getItem("wishList"));
    //tabulate display
    for (i=0; i<list.length; i++){
        var flavor = list[i][0];
        var glazing = list[i][1];
        //add html to each bun//
        var listWrapper = document.getElementsByClassName("list")[0];
        //create big div
        var item = document.createElement("div");
        item.setAttribute("class","product");
        item.setAttribute("id","item"+i);
        //add product image
        var imgNode = document.createElement('img');
        //img source based on glazing
        imgNode.setAttribute("src","img/original_"+glazing+".png");
        //create secondary div
        var smallDiv = document.createElement('div');
        //display flavor
        var productName = document.createElement('h3');
        productName.innerHTML = flavor;
        //add a span to group descriptions
        var desSpan = document.createElement('span');
        //display glazing
        var glazingDes = document.createElement('p');
        glazingDes.innerHTML = "Glazing:";
        var cartGlazing = document.createElement('p');
        cartGlazing.innerHTML = glazing;
       
        //display delete button
       var deleteButton = document.createElement("button");
       var trashIcon = document.createElement("i");
       trashIcon.setAttribute("class","far fa-trash-alt");
       deleteButton.value = i;
       deleteButton.addEventListener("click",function(){
           deleteItem(deleteButton.value)
           console.log(deleteButton.value)
       });

       //append everything
        listWrapper.appendChild(item);
        item.appendChild(imgNode);
        item.appendChild(smallDiv);
        smallDiv.appendChild(productName);
        smallDiv.appendChild(desSpan);
        desSpan.appendChild(glazingDes);
        desSpan.appendChild(cartGlazing);
        smallDiv.appendChild(deleteButton);
        deleteButton.appendChild(trashIcon);
    }
}

function deleteWishItem(index){
    //remove item from cart
    var list = JSON.parse(localStorage.getItem("wishList"));
    list.splice(index-1,1);
    localStorage.setItem("wishList",JSON.stringify(list));    //repopulate page
    getWishList();
}