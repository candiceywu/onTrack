//Passing in Values Logged in Submit Form//
const submitOBtn = document.getElementById('submitBtn')
const submitGCBtn = document.getElementById('submitGCBtn')



//Submit Form for Owner
const submitOForm = async (event) => {
    event.preventDefault();

    let oUsername = document.getElementById('oUsername').value.trim();
    let oEmail = document.getElementById('oEmail').value.trim();;
    let oFirstname = document.getElementById('oFirstname').value.trim();
    let oLastname = document.getElementById('oLastname').value.trim();
    let oNumber = document.getElementById('oNumber').value.trim();
    let oPassword = document.getElementById('oPassword').value.trim();
    let oPasswordcheck = document.getElementById('oPasswordcheck').value.trim();

    if(oPassword !== oPasswordcheck){
        alert("Passwords did not match");
        return;
    }

    if (oUsername && oEmail && oFirstname && oLastname && oNumber && oPassword) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({oUsername, oEmail, oFirstname, oLastname, oNumber, oPassword }),
            headers: { 'Content-Type': 'application/json'}
        });
    };

    // if (response.ok) {
    //     document.location.replace('/projects');
    // } else {
    //     alert('Failed to Sign Up');
    // }

    location.href = "/login";
}

const submitGCForm = async (event) => {
    event.preventDefault();

    let gcUsername = document.getElementById('gcUsername').value.trim();
    let gcEmail = document.getElementById('gcEmail').value.trim();;
    let gcCompanyName = document.getElementById('gcCompanyName').value.trim();
    let gcLicense = document.getElementById('gcLicense').value.trim();
    let gcNumber = document.getElementById('gcNumber').value.trim();
    let gcPassword = document.getElementById('gcPassword').value.trim();
    let gcPasswordcheck = document.getElementById('gcPasswordcheck').value.trim();

    if(gcPassword !== gcPasswordcheck){
        alert("Passwords did not match");
        return;
    }

    if (gcUsername && gcEmail && gcCompanyName && gcLicense && gcNumber && gcPassword){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({gcUsername, gcEmail, gcCompanyName, gcLicense, gcNumber, gcPassword }),
            headers: { 'Content-Type': 'application/json'}
        });
    };

    // if (response.ok) {
    //     document.location.replace('/');
    // } else {
    //     alert('Failed to Sign Up');
    // }

    location.href = "/login"
}

if (submitOBtn){
    submitOBtn.addEventListener('click', submitOForm);
} else {
    submitGCBtn.addEventListener('click', submitGCForm);
}

