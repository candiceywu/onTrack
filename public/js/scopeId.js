let storedScopeId = document.getElementById('storedScopeId').textContent;
let storedProjectId = document.getElementById('storedProjectId').textContent;
const editScopeBtn = document.getElementById('editScopeBtn');
const deleteScopeBtn = document.getElementById('deleteScopeBtn');
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

console.log("hello");
const editScope = async (event) => {
    event.preventDefault();

    let editTitle = document.getElementById('edit-title').value.trim();
    let editDescription = document.getElementById('edit-description').value.trim();
    let status = document.getElementById('edit-is_complete').value.trim();

    console.log(editTitle);
    console.log(status);

    const scopeChange = await fetch (`/api/scope/${storedScopeId}`, { 
        method: "PUT",
        body: JSON.stringify({ editTitle, editDescription, status, picture}),
        headers: {'Content-Type': 'application/json'}
    })

    location.href = `/projects/${storedProjectId}`

}

const deleteScope = async (event) => {
    event.preventDefault();

    if(confirm("Are you sure you want to delete")){
        const destroyScope = await fetch (`/api/scope/${storedScopeId}`, {
            method: "DELETE",
        })
    }
    
    location.reload();
    location.href = `/projects/${storedProjectId}`
}

document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault();
    myWidget.open();
  }, false);


editScopeBtn.addEventListener('click', editScope);
deleteScopeBtn.addEventListener('click', deleteScope)

