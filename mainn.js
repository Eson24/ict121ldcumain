// Function for logout
function logout() {
    // Redirect to the login page
    window.location.href = 'login.html';
}

 // Event listener for archive link
 document.getElementById('Dashboard').addEventListener('click', () => {
    // Redirect the user to the archive page
    window.location.href = 'home.html'; // Replace 'archive.html' with the URL of your archive page
});

function disableUser(email) {
    console.log("Disabling user with email:", email);
    alert("Successfully Disabled"); // Pop-up message na nagsasabing "Successfully Disabled"
}

function enableUser(email) {
    console.log("Enable user with email:", email);
    alert("Successfully Enable"); // Pop-up message na nagsasabing "Successfully Disabled"
}


// Event listener for logout link
document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    logout();
});    