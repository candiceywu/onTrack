const myModal = $('#myModal');
const newProject = $('#newProject');
const addProjectBtn = document.getElementById('addProjectBtn');



function openProjectModal (){
    $(function () {
        myModal.modal("show");
    });
}

const addNewProject = async (event) => {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let address = document.getElementById('address').value.trim();
    let cost = parseInt(document.getElementById('cost').value.trim());
    let description = document.getElementById('description').value.trim();
    let owner = parseInt(document.getElementById('owner').value.trim());

    console.log(name);
    console.log(cost);
    console.log(address);
    console.log(description);
    console.log(owner)

    if (name && address && cost && description && owner){
        const response = await fetch ('/api/projects', {
            method: 'POST',
            body: JSON.stringify({name, address, cost, description, owner}),
            headers: {'Content-Type': 'application/json'}
        });
    }
}



newProject.click(openProjectModal);
addProjectBtn.addEventListener('click', addNewProject);