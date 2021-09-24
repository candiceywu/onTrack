const oUsername = document.getElementById('oUsername').value.trim();
const oEmail = document.getElementById('oEmail').value.trim();;
const oFirstname = document.getElementById('oFirstname').value.trim();
const oLastname = document.getElementById('oLastname').value.trim();
const oNumber = document.getElementById('oNumber').value.trim();
const oPassword = document.getElementById('oPassword').value.trim();
const oPasswordcheck = document.getElementById('oPasswordcheck').value.trim();
const submitBtn = document.getElementById('submitBtn').value.trim();

const submitForm = async (event) => {
    event.preventDefault();

    if(oPassword === oPasswordcheck){
        alert("Passwords did not match");
        return;
    }

    if (oUsername && oEmail && oFirstname && oLastname && oNumber && oPassword)
    const response = await fetch('/api/owners', {
        method: 'POST',
        body: JSON.stringify({oUsername, oEmail, oFirstname, oLastname, oNumber, oPassword }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/projects');
    } else {
        alert('Failed to Sign Up');
    }
}