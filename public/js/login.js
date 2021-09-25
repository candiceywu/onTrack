const loginBtn = document.getElementById('loginBtn');

const logIn = (event) => {
    event.preventDefault();
    //ADD FUNCTIONALITY TO CHECK PASSWORDS & EMAIL MATCH//

    location.href = "/projects";
}

loginBtn.addEventListener('click', logIn);
