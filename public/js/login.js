const ownerBtn = document.getElementById('ownerbtnjs');
const gcBtn = document.getElementById('gcbtnjs');

function changeOwnerBtn(){
    console.log("hello");

    ownerBtn.style.backgroundColor = "blue";
    gcBtn.style.backgroundColor = "gray";

};

function changeGcBtn(){

    ownerBtn.style.backgroundColor = "gray";
    gcBtn.style.backgroundColor = "blue";

};

ownerBtn.addEventListener('click', changeOwnerBtn);
gcBtn.addEventListener('click', changeGcBtn);