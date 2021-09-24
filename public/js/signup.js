//Passing in Values Logged in Submit Form//
const oUsername = document.getElementById('oUsername').value.trim();
const oEmail = document.getElementById('oEmail').value.trim();;
const oFirstname = document.getElementById('oFirstname').value.trim();
const oLastname = document.getElementById('oLastname').value.trim();
const oNumber = document.getElementById('oNumber').value.trim();
const oPassword = document.getElementById('oPassword').value.trim();
const oPasswordcheck = document.getElementById('oPasswordcheck').value.trim();
const submitOBtn = document.getElementById('submitBtn').value.trim();

const gcUsername = document.getElementById('gcUsername').value.trim();
const gcEmail = document.getElementById('gcEmail').value.trim();;
const gcCompanyName = document.getElementById('gcCompanyName').value.trim();
const gcLicense = document.getElementById('gcLicense').value.trim();
const gcNumber = document.getElementById('gcNumber').value.trim();
const gcPassword = document.getElementById('gcPassword').value.trim();
const gcPasswordcheck = document.getElementById('gcPasswordcheck').value.trim();
const submitGCBtn = document.getElementById('submitGCBtn').value.trim();



//Submit Form for Owner//
const submitOForm = async (event) => {
    event.preventDefault();

    if(oPassword !== oPasswordcheck){
        alert("Passwords did not match");
        return;
    }

    if (oUsername && oEmail && oFirstname && oLastname && oNumber && oPassword) {
        const response = await fetch('/api/owners', {
            method: 'POST',
            body: JSON.stringify({oUsername, oEmail, oFirstname, oLastname, oNumber, oPassword }),
            headers: { 'Content-Type': 'application/json'}
        });
    };

    if (response.ok) {
        document.location.replace('/projects');
    } else {
        alert('Failed to Sign Up');
    }
}

const submitGCForm = async (event) => {
    event.preventDefault();

    if(gcPassword !== gcPasswordcheck){
        alert("Passwords did not match");
        return;
    }

    if (gcUsername && gcEmail && gcCompanyName && gcLicense && gcNumber && gcPassword){
        const response = await fetch('/api/gc', {
            method: 'POST',
            body: JSON.stringify({gcUsername, gcEmail, gcCompanyName, gcLicense, gcNumber, gcPassword }),
            headers: { 'Content-Type': 'application/json'}
        });
    };

    if (response.ok) {
        document.location.replace('/projects');
    } else {
        alert('Failed to Sign Up');
    }
}

submitOBtn.addEventListener('click', submitOForm);
submitGCBtn.addEventListener('click', submitGCForm);