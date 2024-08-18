// Password displayed on index.html
const correctPassword = 'bella ciao';

function checkPassword() {
    const password = document.getElementById('password-input').value;
    console.log("Entered password:", password); // For debugging

    if (password === correctPassword) {
        console.log("Password correct!"); // For debugging
        document.getElementById('password-form').style.display = 'none';
        
        // Hide the password hint
        const passwordHint = document.getElementById('password-hint');
        if (passwordHint) {
            passwordHint.style.display = 'none';
        }

        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.style.display = 'block';
        setTimeout(() => {
            welcomeMessage.style.opacity = 1;
            document.getElementById('loading-bar').style.width = '100%';
        }, 100);
        
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 4000);
    } else {
        console.log("Password incorrect"); // For debugging
        alert('Incorrect password. Try again.');
    }
}

// Event listener for the submit button
document.getElementById('submit-button').addEventListener('click', function(e) {
    e.preventDefault();
    checkPassword();
});

// Event listener for the Enter key
document.getElementById('password-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

// Optionally, add some text animations
document.addEventListener('DOMContentLoaded', (event) => {
    const title = document.querySelector('h1');
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '.letter',
            scale: [0.3,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i+1)
        }).add({
            targets: '.letter',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});