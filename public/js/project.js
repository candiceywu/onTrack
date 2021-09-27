const myModal = $('#myModal');
const newProject = $('#newProject');
const addProjectBtn = document.getElementById('addProjectBtn');
let gcIdNumber = document.getElementById('idStore').textContent;
//let gcUsername = document.getElementById('usernameStore').textContent
console.log(gcIdNumber);



function openProjectModal (){
    $(function () {
        myModal.modal("show");
    });
}

const addNewProject = async (event) => {
    event.preventDefault();

    let converter = false;
    let name = document.getElementById('name').value.trim();
    let address = document.getElementById('address').value.trim();
    let cost = parseInt(document.getElementById('cost').value.trim());
    let description = document.getElementById('description').value.trim();
    let owner = parseInt(document.getElementById('owner').value.trim());
    
    gcIdNumber = parseInt(gcIdNumber);

    console.log(name);
    console.log(cost);
    console.log(address);
    console.log(description);
    console.log(owner)

    if (name && address && cost && description && owner){
        const response = await fetch ('/api/projects', {
            method: 'POST',
            body: JSON.stringify({name, address, cost, description, owner, gcIdNumber}),
            headers: {'Content-Type': 'application/json'}
        });
        
        converter = true;
    }

    // if (username){
    //     const response = await fetch ('/api/users/login', {
    //         method: 'POST',
    //         body: JSON.stringify({username}),
    //         headers: {'Content-Type': 'application/json'}
    //     });
        
    //     converter = true;
    // }


    if (converter){
        $(function () {
            myModal.modal("hide");
            location.reload();
        });
    }

    location.reload();
}



newProject.click(openProjectModal);
addProjectBtn.addEventListener('click', addNewProject);
