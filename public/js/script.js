const ownerBtn = document.getElementById('ownerbtnjs');
const gcBtn = document.getElementById('gcbtnjs');

function printHello(){
    console.log("hello");
}

ownerBtn.addEventListener('click', printHello);
gcBtn.addEventListener('click', printHello);