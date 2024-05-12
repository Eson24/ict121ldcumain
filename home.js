// Function for logout
function logout() {
    // Redirect to the login page
    window.location.href = 'login.html';
}

 // Event listener for archive link
 document.getElementById('archive').addEventListener('click', () => {
    // Redirect the user to the archive page
    window.location.href = 'index.html'; // Replace 'archive.html' with the URL of your archive page
});

// Event listener for logout link
document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    logout();
});    