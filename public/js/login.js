const ownerBtn = document.getElementById('ownerBtn');
const gcBtn = document.getElementById('gcBtn');

function changeOwnerBtn(event){
    event.preventDefault();
    
    document.location.replace('/ownersignup');
};

function changeGcBtn(event){
    event.preventDefault();
    
    document.location.replace('/gcsignup');

};

ownerBtn.addEventListener('click', changeOwnerBtn);
gcBtn.addEventListener('click', changeGcBtn);