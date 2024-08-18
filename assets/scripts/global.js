// Navbar title animation
const titleElement = document.getElementById('title-animation');
const titleText = titleElement.textContent;
titleElement.innerHTML = '';

for (let i = 0; i < titleText.length; i++) {
    const span = document.createElement('span');
    span.textContent = titleText[i];
    span.style.animationDelay = `${i * 0.1}s`;
    titleElement.appendChild(span);
}

// Navbar link hover effect
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textShadow = '0 0 10px #BF0904, 0 0 20px #BF0904, 0 0 30px #BF0904';
    });

    link.addEventListener('mouseout', () => {
        link.style.textShadow = 'none';
    });
});

// Particles.js configuration (if you're using it)
particlesJS('particles-js', {
    // Your particles configuration here
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})