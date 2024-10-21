document.querySelector('#blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const errorMessage = document.querySelector('#error-message');
  
    // Validate form input
    if (!username || !title || !content) {
      errorMessage.textContent = 'All fields are required!';
      return;
    } else {
      errorMessage.textContent = '';
    }
  
    // Store blog post in localStorage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push({ username, title, content });
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
    // Redirect to blog.html
    window.location.href = 'blog.html';
  });
  