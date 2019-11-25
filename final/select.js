var selectedAssets = [];
var legacyContacts = [];
var contactName = [];
var facebookPlan = [];
var facebookContact = [];

function validate(){
    console.log("hi");
    var checked = document.getElementsByTagName('input');
    selectedAssets = [];
    for (i=0; i<checked.length; i++){
        if (checked[i].checked){
            selectedAssets.push(checked[i].id)
            }
        }
    console.log(selectedAssets);
    // save items
    localStorage.setItem("selectedAssets",JSON.stringify(selectedAssets));
}

// contact object
function Contact(first,last,email,tel,relationship){
    this.first = first;
    this.last = last;
    this.email = email;
    this.tel = tel;
    this.relationship = relationship;
}

function collectInfo(){
    // add information in to storage
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var name = firstName +" "+ lastName;
    var email = document.getElementById("emailInput").value;
    var tel = document.getElementById("telInput").value;
    var relationship  = document.getElementById("relationship").value;
    var info = [firstName, lastName, email, tel, relationship];
    legacyContacts.push(info);
    contactName.push(name);
    localStorage.setItem("contactName",JSON.stringify(contactName));
    localStorage.setItem("legacyContacts",JSON.stringify(legacyContacts));
    // display another form
    var parentDiv = document.getElementById("legacyContainer");
    var card = document.createElement("div")
    card.setAttribute("class","card legacyCard");

    var nameDiv = document.createElement("div");
    nameDiv.setAttribute("class","form-group");
    var nameLabel = document.createElement("label");
    nameLabel.setAttribute('for',"name")
    nameLabel.innerHTML = "Name";

    var nameRow = document.createElement("div");
    nameRow.setAttribute("class","row");
    var nameCol1 = document.createElement("div");
    nameCol1.setAttribute("class","col");
    var input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("class","form-control");
    input1.setAttribute("placeholder","First name");
    input1.setAttribute("id","first");
    var nameCol2 = document.createElement("div");
    nameCol2.setAttribute("class","col");
    var input2 = document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("class","form-control");
    input2.setAttribute("placeholder","Last name");
    input2.setAttribute("id","last");

    var emailDiv = document.createElement("div");
    emailDiv.setAttribute("class","form-group");
    var emailLabel = document.createElement("label");
    emailLabel.setAttribute("for","email");
    emailLabel.innerHTML = "Email";
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("class","form-control");
    emailInput.setAttribute("aria-describedby","emailHelp");
    emailInput.setAttribute("id","emailInput");
    emailInput.setAttribute("placeholder","Enter email");

    var telDiv = document.createElement("div");
    telDiv.setAttribute("class","form-group");
    var telLabel = document.createElement("label");
    telLabel.setAttribute("for","tel");
    telLabel.innerHTML = "Tel";
    var telInput = document.createElement("input");
    telInput.setAttribute("type","tel");
    telInput.setAttribute("class","form-control");
    telInput.setAttribute("id","telInput");
    telInput.setAttribute("placeholder","(xxx)xxx-xxxx");

    var relationDiv = document.createElement("div");
    relationDiv.setAttribute("class","form-group");
    var relationLabel = document.createElement("label");
    relationLabel.setAttribute("for","relationship");
    relationLabel.innerHTML = "Relationship";
    var relationSelect = document.createElement("select");
    relationSelect.setAttribute("class","form-control");
    relationSelect.setAttribute("id","relationship");
    var option1 = document.createElement("option");
    option1.innerHTML = "Family";
    option1.setAttribute("value","family");
    var option2 = document.createElement("option");
    option2.innerHTML = "Friend";
    option2.setAttribute("value","friend");
    var option3 = document.createElement("option");
    option3.innerHTML = "Collegue";
    option3.setAttribute("value","collegue");
    var option4 = document.createElement("option");
    option4.innerHTML = "Others";
    option4.setAttribute("value","others");
    
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("class","btn btn-primary");
    submitBtn.setAttribute("onClick","collectInfo()")
    submitBtn.innerHTML = "Done";
    // append
    parentDiv.appendChild(card);
    card.appendChild(nameDiv);
    card.appendChild(emailDiv);
    card.appendChild(telDiv);
    card.appendChild(relationDiv);
    card.appendChild(submitBtn);
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameRow);
    nameRow.appendChild(nameCol1);
    nameRow.appendChild(nameCol2);
    nameCol1.appendChild(input1);
    nameCol2.appendChild(input2);
    emailDiv.appendChild(emailLabel)
    emailDiv.appendChild(emailInput);
    telDiv.appendChild(telLabel)
    telDiv.appendChild(telInput);
    relationDiv.appendChild(relationLabel);
    relationDiv.appendChild(relationSelect);
    relationSelect.appendChild(option1);
    relationSelect.appendChild(option2);
    relationSelect.appendChild(option3);
    relationSelect.appendChild(option4);
}

function toggleBorder(element){
    // toggle the look of selection 
    var div = element.parentElement.parentElement;
    console.log(element.checked)
    if(element.checked === true){
        div.classList.add("selected")
    }
    else{
        div.classList.remove("selected")
    }
    console.log(div.classList);
}

function parseList(){
    // get items
    var assets = JSON.parse(localStorage.getItem("selectedAssets"));
    console.log(assets);
    for (i=0;i<assets.length;i++){
        var name = assets[i];

        var parentDiv = document.getElementById("assetDiv");
        var smallDiv = document.createElement("div");
        smallDiv.setAttribute("class","card asset")
        var link = document.createElement("a");
        link.setAttribute("href",name+".html")
        var asset = document.createElement("div");
        asset.setAttribute("class","product");
        // attach image
        var imgNode = document.createElement('img');
        imgNode.setAttribute("src","img/"+name+".png");
        var assetName = document.createElement('h3');
        assetName.innerHTML = name;

        // append
        parentDiv.appendChild(smallDiv);
        smallDiv.appendChild(link)
        link.appendChild(asset);
        asset.appendChild(imgNode);
        asset.appendChild(assetName);

    }
}

function getContacts(){
    var contacts = JSON.parse(localStorage.getItem("contactName"));
    console.log(contacts);
    var parentDiv = document.getElementById("contacts");
    for (i=0; i<contacts.length; i++){
        var contactInput = document.createElement("input");
        contactInput.setAttribute("class","form-check-input");
        contactInput.setAttribute("type","radio");
        contactInput.setAttribute("name","selectContact");
        contactInput.setAttribute("id",contacts[i]);
        contactInput.setAttribute("value",contacts[i]);
        parentDiv.appendChild(contactInput);
        var contactLabel = document.createElement("label");
        contactLabel.setAttribute("class","form-check-label");
        contactLabel.setAttribute("for",contacts[i]);
        parentDiv.appendChild(contactLabel);
        var contactName = document.createElement("h3");
        contactName.innerHTML = contacts[i];
        contactLabel.appendChild(contactName)

    }
}

function checkForm(){
    // check if all inputs are filled
    var actions = document.getElementsByName("actions");
    var contacts = document.getElementsByName("selectContact")
     for (var i = 0, len = actions.length; i < len; i++) {
          if (actions[i].checked) {
              for (var j = 0, len = contacts.length; j < len; j++){
                  if (contacts[j].checked){
                    setPlan();
                  }
              }
          }
        }
    }


function setPlan(){
    console.log("in setPlan() function now...")
    
    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            facebookPlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            facebookContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("facebookPlan",JSON.stringify(facebookPlan));
    localStorage.setItem("facebookContact",JSON.stringify(facebookContact));

    //change submit button to edit button
    var submit = document.getElementById("submitBtn");
    submit.classList.add("hidden");
    var edit = document.getElementById("editBtn");
    edit.classList.remove("hidden");
    
    //disable form
    for (i=0;i<actions.length;i++){
        actions[i].disabled = true;
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        actions[i].disabled = true;
    }
}

function editForm(){
    var submit = document.getElementById("submitBtn");
    submit.classList.remove("hidden");
    var edit = document.getElementById("editBtn");
    edit.classList.add("hidden");

    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        actions[i].disabled = false;
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        contacts[i].disabled = false;
    }

}

function parseResult(){
    //get assets
    var assets = JSON.parse(localStorage.getItem("selectedAssets"));
    //show on DOM
    var parentDiv = document.getElementById("result");

    for (var i = 0, len = assets.length; i < len; i++) {
        if(assets[i] == "Facebook"){
            var facebookAsset = document.createElement("h4");
            facebookAsset.innerHTML="Facebook";
            parentDiv.appendChild(facebookAsset);
            var facebookPlan = JSON.parse(localStorage.getItem("facebookPlan"));
            var facebookContact = JSON.parse(localStorage.getItem("facebookContact"));
            
            var facebookPlanDom = document.createElement("p");

            if (facebookPlan[0] =="memorialize"){
                facebookPlanDom.innerHTML = "Memorialize Account, pass on to " + facebookContact[0];
            } else{                
                facebookPlanDom.innerHTML = "Delete Account"
        }    
        parentDiv.appendChild(facebookPlanDom);


        }
    }





}