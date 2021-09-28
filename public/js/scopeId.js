let storedScopeId = document.getElementById('storedScopeId');
const editScopeBtn = document.getElementById('editScopeBtn');

const editScope = async () => {

    let editTitle = document.getElementById('edit-title');
    let editDescription = document.getElementById('edit-description');
    let status = document.getElementById('edit-is_complete');

    const scopeChange = await fetch (`/api/scope/:${storedScopeId}`, { 
        method: "PUT",
        body: JSON.stringify({ editTitle, editDescription, status}),
        headers: {'Content-Type': 'application/json'}
    })

    window.location.assign('/projects')

}

editScopeBtn.addEventListener('click', editScope);

<script src="/js/scopeId.js"></script>