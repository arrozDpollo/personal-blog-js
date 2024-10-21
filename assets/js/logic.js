const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Store blog data in localStorage on form submission
document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        alert('Please fill out all fields.');
        return;
    }

    const blogPost = {
        username,
        title,
        content,
    };

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html';
});
