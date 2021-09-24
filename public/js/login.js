const ownerBtn = document.getElementById('ownerbtnjs');
const gcBtn = document.getElementById('gcbtnjs');

function changeOwnerBtn(event){
    event.preventDefault();
    console.log("hello");

    ownerBtn.style.backgroundColor = "blue";
    gcBtn.style.backgroundColor = "gray";

};

function changeGcBtn(event){
    event.preventDefault();
    
    ownerBtn.style.backgroundColor = "gray";
    gcBtn.style.backgroundColor = "blue";

};

ownerBtn.addEventListener('click', changeOwnerBtn);
gcBtn.addEventListener('click', changeGcBtn);