var selectedAssets = [];
var legacyContacts = [];
var contactName = [];

var facebookPlan = [];
var facebookContact = [];
var youtubePlan=[];
var youtubeContact = [];
var linkedinPlan=[];
var linkedinContact =[];
var instagramPlan=[];
var instagramContact =[];
var messengerPlan=[];
var messengerContact =[];
var whatsappPlan=[];
var whatsappContact =[];
var snapchatPlan=[];
var snapchatContact =[];
var twitterPlan=[];
var twitterContact=[];

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
    var forms = document.getElementsByClassName("legacyCard");
    console.log(forms);
    //clear storage
    legacyContacts = [];
    contactName = [];
    var firstName = document.getElementsByClassName("first");
    var lastName = document.getElementsByClassName("last");
    var email = document.getElementsByClassName("emailInput");
    var tel = document.getElementsByClassName("telInput");
    var relationship  = document.getElementsByClassName("relationship");
    // console.log(firstName);
    // add information in to storage in loop
    for (i=0;i<forms.length;i++){
        var name = firstName[i].value + " " + lastName[i].value;
        contactName.push(name);
        var info = [firstName[i].value, lastName[i].value, email[i].value, tel[i].value, relationship[i].value];
        legacyContacts.push(info);

    }

 
    console.log(contactName)
    localStorage.setItem("contactName",JSON.stringify(contactName));
    localStorage.setItem("legacyContacts",JSON.stringify(legacyContacts));
    
    // display tentative add contact
    var parentDiv = document.getElementById("legacyContainer");
    var card = document.createElement("div")
    card.setAttribute("class","card legacyCard clickable");
    var plus = document.createElement("i");
    plus.setAttribute("class","fas fa-plus");
    plus.setAttribute("onclick","newLegacyForm(this)");
    card.appendChild(plus);
    parentDiv.appendChild(card);
    var nextBtn = document.getElementById("nextBtn");
    nextBtn.classList.remove("disabled")
}

function newLegacyForm(plus){
    var card = plus.parentElement;
    card.classList.remove("clickable");
    plus.remove();
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
    input1.setAttribute("placeholder","First name");
    input1.setAttribute("class","form-control first");
    var nameCol2 = document.createElement("div");
    nameCol2.setAttribute("class","col");
    var input2 = document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("placeholder","Last name");
    input2.setAttribute("class","form-control last");

    var emailDiv = document.createElement("div");
    emailDiv.setAttribute("class","form-group");
    var emailLabel = document.createElement("label");
    emailLabel.setAttribute("for","email");
    emailLabel.innerHTML = "Email";
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("class","form-control emailInput");
    emailInput.setAttribute("aria-describedby","emailHelp");
    emailInput.setAttribute("placeholder","Enter email");

    var telDiv = document.createElement("div");
    telDiv.setAttribute("class","form-group");
    var telLabel = document.createElement("label");
    telLabel.setAttribute("for","tel");
    telLabel.innerHTML = "Tel";
    var telInput = document.createElement("input");
    telInput.setAttribute("type","tel");
    telInput.setAttribute("class","form-control telInput");
    telInput.setAttribute("placeholder","(xxx)xxx-xxxx");

    var relationDiv = document.createElement("div");
    relationDiv.setAttribute("class","form-group");
    var relationLabel = document.createElement("label");
    relationLabel.setAttribute("for","relationship");
    relationLabel.innerHTML = "Relationship";
    var relationSelect = document.createElement("select");
    relationSelect.setAttribute("class","form-control relationship");
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

function checkForm(asset){
    // check if all inputs are filled
    var actions = document.getElementsByName("actions");
    var contacts = document.getElementsByName("selectContact")
     for (var i = 0, len = actions.length; i < len; i++) {
          if (actions[i].checked) {
              for (var j = 0, len = contacts.length; j < len; j++){
                  if (contacts[j].checked){
                    if (asset.classList.contains("facebook")){setFacebookPlan()}
                    if (asset.classList.contains("youtube")){setYouTubePlan()}
                    if (asset.classList.contains("linkedin")){setLinkedInPlan()}
                    if (asset.classList.contains("messenger")){setMessengerPlan()}
                    if (asset.classList.contains("instagram")){setInstagramPlan()}
                    if (asset.classList.contains("twitter")){setTwitterPlan()}
                    if (asset.classList.contains("snapchat")){setSnapchatPlan()}
                    if (asset.classList.contains("whatsapp")){setWhatsAppPlan()}
                  }
              }
          }
        }
    }


function setFacebookPlan(){
    console.log("in facebook plan")

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
    lockForm();
}


function setYouTubePlan(){
    console.log("in youtube plan")
    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            youtubePlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            youtubeContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("youtubePlan",JSON.stringify(youtubePlan));
    localStorage.setItem("youtubeContact",JSON.stringify(youtubeContact));
    lockForm();
}

function setLinkedInPlan(){
    console.log("in linkedin plan")
    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            linkedinPlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            linkedinContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("linkedinPlan",JSON.stringify(linkedinPlan));
    localStorage.setItem("linkedinContact",JSON.stringify(linkedinContact));
    lockForm();
}

function setMessengerPlan(){
    console.log("in messenger plan")
    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            messengerPlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            messengerContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("messengerPlan",JSON.stringify(messengerPlan));
    localStorage.setItem("messengerContact",JSON.stringify(messengerContact));
    lockForm();
}
    

function setInstagramPlan(){
    console.log("in instagram plan")

    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            instagramPlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            instagramContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("instagramPlan",JSON.stringify(instagramPlan));
    localStorage.setItem("instagramContact",JSON.stringify(instagramContact));
    lockForm();
}

function setSnapchatPlan(){
    console.log("in snap plan")

    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            snapchatPlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            snapchatContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("snapchatPlan",JSON.stringify(snapchatPlan));
    localStorage.setItem("snapchatContact",JSON.stringify(snapchatContact));
    lockForm();
}

function setTwitterPlan(){
    console.log("in twitter plan")

    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            twitterPlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            twitterContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("twitterPlan",JSON.stringify(twitterPlan));
    localStorage.setItem("twitterContact",JSON.stringify(twitterContact));
    lockForm();
}

function setWhatsAppPlan(){
    console.log("in whatsapp plan")

    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        if(actions[i].checked){
            whatsappPlan.push(actions[i].value);
            
        }
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        if(contacts[i].checked){
            whatsappContact.push(contacts[i].value);
        }
    }
    localStorage.setItem("whatsappPlan",JSON.stringify(whatsappPlan));
    localStorage.setItem("whatsappContact",JSON.stringify(whatsappContact));
    lockForm();
}




function lockForm(){
    //change submit button to edit button
    var submit = document.getElementById("submitBtn");
    submit.classList.add("hidden");
    var edit = document.getElementById("editBtn");
    edit.classList.remove("hidden");
    
    //disable form
    var actions = document.getElementsByName("actions");
    for (i=0;i<actions.length;i++){
        actions[i].disabled = true;
        
    }
    var contacts = document.getElementsByName("selectContact");
    for (i=0;i<contacts.length;i++){
        contacts[i].disabled = true;
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
    var contacts = JSON.parse(localStorage.getItem("legacyContacts"));
    for (var j=0; j<contacts.length;j++){
        var legacyInfo = document.createElement("div");
        parentDiv.appendChild(legacyInfo);
        var name = document.createElement("h4");
        name.innerHtml = "Name: "+ contacts[j][0] + contacts[j][1];
  
    }

    for (var i = 0, len = assets.length; i < len; i++) {
        if(assets[i] == "Facebook"){
            var facebookAsset = document.createElement("h4");
            facebookAsset.innerHTML="Facebook";
            parentDiv.appendChild(facebookAsset);
            var facebookPlan = JSON.parse(localStorage.getItem("facebookPlan"));
            var facebookContact = JSON.parse(localStorage.getItem("facebookContact"));
            
            var facebookPlanDom = document.createElement("p");
            if (facebookPlan.length > 0){
            if (facebookPlan[0] =="memorialize"){
                facebookPlanDom.innerHTML = "Memorialize Account, pass on to " + facebookContact[0];
            } else{                
                facebookPlanDom.innerHTML = "Delete Account"
        }}
        parentDiv.appendChild(facebookPlanDom);
    }
        if(assets[i] == "YouTube"){
            var youtubeAsset = document.createElement("h4");
            youtubeAsset.innerHTML="YouTube";
            parentDiv.appendChild(youtubeAsset);
            var youtubePlan = JSON.parse(localStorage.getItem("youtubePlan"));
            var youtubeContact = JSON.parse(localStorage.getItem("youtubeContact"));
            
            var youtubePlanDom = document.createElement("p");
            if (youtubePlan.length > 0){
            if (youtubePlan[0] =="delete"){
                youtubePlanDom.innerHTML = "Delete Channel"
            } if(youtubePlan[0] == "hide"){
                youtubePlanDom.innerHTML = "Hide Channel"
            }
            else{                
                youtubePlanDom.innerHTML = "Leave as it is"
        }}
        
        parentDiv.appendChild(youtubePlanDom);
        }

        if(assets[i] == "LinkedIn"){
            var linkedinAsset = document.createElement("h4");
            linkedinAsset.innerHTML="LinkedIn";
            parentDiv.appendChild(linkedinAsset);
            var linkedinPlan = JSON.parse(localStorage.getItem("linkedinPlan"));
            var linkedinContact = JSON.parse(localStorage.getItem("linkedinContact"));
            
            var linkedinPlanDom = document.createElement("p");
            if (linkedinPlan.length > 0){
            if (linkedinPlan[0] =="close"){
                linkedinPlanDom.innerHTML = "Close account"
            } if(linkedinPlan[0] == "cancel"){
                linkedinPlanDom.innerHTML = "Cancel Subscription"
            }
            else{                
                linkedinPlanDom.innerHTML = "Leave as it is"
        }}
        
        parentDiv.appendChild(linkedinPlanDom);
        }

        if(assets[i] == "Twitter"){
            var twitterAsset = document.createElement("h4");
            twitterAsset.innerHTML="Twitter";
            parentDiv.appendChild(twitterAsset);
            var twitterPlan = JSON.parse(localStorage.getItem("twitterPlan"));
            var twitterContact = JSON.parse(localStorage.getItem("twitterContact"));
            
            var twitterPlanDom = document.createElement("p");
            if (twitterPlan.length > 0){
            if (twitterPlan[0] =="deactivate"){
                twitterPlanDom.innerHTML = "Deactivate account"
            } 
            else{                
                twitterPlanDom.innerHTML = "Leave as it is"
        }}
        
        parentDiv.appendChild(twitterPlanDom);
        }

        if(assets[i] == "Instagram"){
            var instagramAsset = document.createElement("h4");
            instagramAsset.innerHTML="Instagram";
            parentDiv.appendChild(instagramAsset);
            var instagramPlan = JSON.parse(localStorage.getItem("instagramPlan"));
            var instagramContact = JSON.parse(localStorage.getItem("instagramContact"));
            
            var instagramPlanDom = document.createElement("p");
            if (instagramPlan.length > 0){
            if (instagramPlan[0] =="archive"){
                instagramPlanDom.innerHTML = "Download data and delete account, pass data to" + instagramContact[0]
            } if(instagramPlan[0] == "delete"){
                instagramPlanDom.innerHTML = "Delete account"
            }
            else{                
                instagramPlanDom.innerHTML = "Transfer ownership to " + instagramContact[0]
        }}
        
        parentDiv.appendChild(instagramPlanDom);
        }

        if(assets[i] == "Snapchat"){
            var snapchatAsset = document.createElement("h4");
            snapchatAsset.innerHTML="Snapchat";
            parentDiv.appendChild(snapchatAsset);
            var snapchatPlan = JSON.parse(localStorage.getItem("snapchatPlan"));
            var snapchatContact = JSON.parse(localStorage.getItem("snapchatContact"));
            
            var snapchatPlanDom = document.createElement("p");
            if (snapchatPlan.length > 0){
            if (snapchatPlan[0] =="delete"){
                snapchatPlanDom.innerHTML = "Delete Account"
            } if(snapchatPlan[0] == "download"){
                snapchatPlanDom.innerHTML = "Download data, pass data to "+ snapchatContact[0]
            }
            else{                
                snapchatPlanDom.innerHTML = "Leave as it is"
        }}
        
        parentDiv.appendChild(snapchatPlanDom);
        }

        if(assets[i] == "Messenger"){
            var messengerAsset = document.createElement("h4");
            messengerAsset.innerHTML="Messenger";
            parentDiv.appendChild(messengerAsset);
            var messengerPlan = JSON.parse(localStorage.getItem("messengerPlan"));
            var messengerContact = JSON.parse(localStorage.getItem("messengerContact"));
            
            var messengerPlanDom = document.createElement("p");
            if (messengerPlan.length > 0){
            if (messengerPlan[0] =="delete"){
                messengerPlanDom.innerHTML = "Delete Channel"
            } if(messengerPlan[0] == "hide"){
                messengerPlanDom.innerHTML = "Hide Channel"
            }
            else{                
                messengerPlanDom.innerHTML = "Leave as it is"
        }}
        
        parentDiv.appendChild(messengerPlanDom);
        }

        if(assets[i] == "WhatsApp"){
            var whatsappAsset = document.createElement("h4");
            whatsappAsset.innerHTML="WhatsApp";
            parentDiv.appendChild(whatsappAsset);
            var whatsappPlan = JSON.parse(localStorage.getItem("whatsappPlan"));
            var whatsappContact = JSON.parse(localStorage.getItem("whatsappContact"));
            
            var whatsappPlanDom = document.createElement("p");
            if (whatsappPlan.length > 0){
            if (whatsappPlan[0] =="delete"){
                whatsappPlanDom.innerHTML = "Delete Channel"
            } if(whatsappPlan[0] == "hide"){
                whatsappPlanDom.innerHTML = "Hide Channel"
            }
            else{                
                whatsappPlanDom.innerHTML = "Leave as it is"
        }}
        
        parentDiv.appendChild(whatsappPlanDom);
        }
    }

}

function clearAll(){
    localStorage.clear();
}