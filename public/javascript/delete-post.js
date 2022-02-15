async function deleteFormHandler(e) {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to delete this post (this action is permanent)?');
    
    if (!confirm) {
        return;
    }

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${post_id}`, {
        method:'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    });

    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);