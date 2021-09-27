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

const logIn = async (event) => {
    event.preventDefault();
    //ADD FUNCTIONALITY TO CHECK PASSWORDS & EMAIL MATCH//

    const loginUser = document.getElementById('loginUser').value.trim();
    console.log(loginUser);

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({loginUser}),
        headers: {'Content-Type': 'application/json'}
    })



    location.href = "/projects";
}

if (loginBtn){
    loginBtn.addEventListener('click', logIn);
}

if(ownerBtn){
    ownerBtn.addEventListener('click', changeOwnerBtn);
    gcBtn.addEventListener('click', changeGcBtn);
}
