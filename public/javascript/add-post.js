async function newFormHandler(e) {
    e.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_url = document.querySelector('input[name="post-url"]').value.trim();
    console.log(title, ' ', post_url);
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ 
            title, 
            post_url 
        }),
        headers: {
            'Content-Type':'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);