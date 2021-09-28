const myModal = $('#myScopeModal');
const newScope = $('#newScope');
const addScopeBtn = document.getElementById('addScopeBtn');
let projectStoreId = document.getElementById('projectStoredId').textContent;
let picture;
var myWidget = cloudinary.createUploadWidget({
    

    cloudName: 'jscott1570', 
    uploadPreset: 'vcicpqhn'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        picture = result.info.secure_url;
      }
    }
  )



function openScopeModal() {
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
    let is_complete = document.getElementById('is_complete').value.trim();
    
    projectStoreId = parseInt(projectStoreId);


    if (title && description && is_complete) {
        const response = await fetch('/api/scope', {
            method: 'POST',
            body: JSON.stringify({ title, description, is_complete, picture, projectStoreId}),
            headers: { 'Content-Type': 'application/json' }
        });

        converter = true;
    }

    if (converter) {
        $(function () {
            myModal.modal("hide");
            location.reload();
        });
    }
}


  
  document.getElementById("upload_widget").addEventListener("click", function(event){
      event.preventDefault();
      myWidget.open();
    }, false);



newScope.click(openScopeModal);
addScopeBtn.addEventListener('click', addNewScope);



