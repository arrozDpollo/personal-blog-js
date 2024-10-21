// Display blog posts from localStorage
const blogList = document.getElementById('blog-list');
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Clear existing posts (if any)
blogList.innerHTML = '';

// Iterate through each post and create a blog item
blogPosts.forEach(post => {
    const blogItem = document.createElement('div');
    blogItem.classList.add('blog-card'); // Changed from 'blog-item' to 'blog-card' for consistent styling
    blogItem.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>By:</strong> ${post.username}</p>
        <p>${post.content}</p>
    `;
    blogList.appendChild(blogItem);
});

// Dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Add event listener for the toggle button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change the icon based on the current mode
    const icon = toggleButton.querySelector('.icon');
    if (body.classList.contains('dark-mode')) {
        icon.textContent = '☀️'; // Sun icon for light mode
    } else {
        icon.textContent = '🌙'; // Moon icon for dark mode
    }
});
