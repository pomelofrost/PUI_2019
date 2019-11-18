var selectedAssets = [];

function validate(){
    console.log("hi");
    var checked = document.getElementsByTagName('input');
    console.log(checked);
    for (i=0; i<checked.length; i++){
        if (checked[i].checked){
            selectedAssets.push(checked[i])
            }
        }
}

function addBorder(){
    var item = document.getElementById
}