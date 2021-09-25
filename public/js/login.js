const ownerBtn = document.getElementById('ownerBtn');
const gcBtn = document.getElementById('gcBtn');
const loginBtn = document.getElementById('loginBtn');

function changeOwnerBtn(event){
    event.preventDefault();
    
    document.location.replace('/ownersignup');
};

function changeGcBtn(event){
    event.preventDefault();
    
    document.location.replace('/gcsignup');

};

const logIn = (event) => {
    event.preventDefault();
    //ADD FUNCTIONALITY TO CHECK PASSWORDS & EMAIL MATCH//

    location.href = "/projects";
}

if (loginBtn){
    loginBtn.addEventListener('click', logIn);
}

if(ownerBtn){
    ownerBtn.addEventListener('click', changeOwnerBtn);
    gcBtn.addEventListener('click', changeGcBtn);
}
