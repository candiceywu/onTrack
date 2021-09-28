let storedScopeId = document.getElementById('storedScopeId');
const editScopeBtn = document.getElementById('editScopeBtn');

const editScope = async () => {

    let editTitle = document.getElementById('edit-title').value.trim();
    let editDescription = document.getElementById('edit-description').value.trim();
    let status = document.getElementById('edit-is_complete').value.trim();

    const scopeChange = await fetch (`/api/scope/:${storedScopeId}`, { 
        method: "PUT",
        body: JSON.stringify({ editTitle, editDescription, status}),
        headers: {'Content-Type': 'application/json'}
    })

    window.location.assign('/projects')

}

editScopeBtn.addEventListener('click', editScope);

<script src="/js/scopeId.js"></script>