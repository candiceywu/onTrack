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

    let loginUser = document.getElementById('loginUser').value.trim();
    let password = document.getElementById('inputPassword').value.trim();
    console.log(loginUser);

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({loginUser, password}),
        headers: {'Content-Type': 'application/json'}
    })
        
    if(response.ok){
        //var data = await response.json()
        // let data_id;
        // console.log(data);
        // console.log(data_id);
        location.href = `/projects/`;
    } else {
        alert("Username or Password Entered Incorrectly");
    }

    
}

if (loginBtn){
    loginBtn.addEventListener('click', logIn);
}

if(ownerBtn){
    ownerBtn.addEventListener('click', changeOwnerBtn);
    gcBtn.addEventListener('click', changeGcBtn);
}
