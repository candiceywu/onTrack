const myModal = $('#myScopeModal');
const newScope = $('#newScope');
const addScopeBtn = document.getElementById('addScopeBtn');
const editScopeBtn = document.getElementById('edit-scope');



function openScopeModal (){
    $(function () {
        myModal.modal("show");
    });
}

const addNewScope = async (event) => {
    event.preventDefault();

    // do we need to add picture variable?
    
    let converter = false;
    let title = document.getElementById('title').value.trim();
    let description = document.getElementById('description').value.trim();
    let is_complete = parseInt(document.getElementById('is_complete').value.trim());
    //let picture = document.getElementById('picture').value.trim();

    console.log(title);
    console.log(description);
    console.log(is_complete);

    if (title && description && is_complete){
        const response = await fetch ('/api/scope', {
            method: 'POST',
            body: JSON.stringify({title, description, is_complete,}),
            headers: {'Content-Type': 'application/json'}
        });
        
        converter = true;
    }

    if (converter){
        $(function () {
            myModal.modal("hide");
            location.reload();
        });
    }
}

const editScope = async (event) => {
    if (event.target.hasAttribute('edit-scope')) {
      const id = event.target.getAttribute('edit-scope');
  
      const response = await fetch(`/api/scope/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/scope');
      } else {
        alert('Failed to modify scope.');
      }
    }
  };

newScope.click(openScopeModal);
addScopeBtn.addEventListener('click', addNewScope);
editScopeBtn.addEventListener('click', editScope);


