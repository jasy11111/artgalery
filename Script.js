// script.js

const gallery = document.getElementById('gallery');

// Add event listener for mouse movement
gallery.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth) - 0.5;
    let y = (e.clientY / window.innerHeight) - 0.5;

    // Rotate gallery based on mouse position
    gallery.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
});

gallery.addEventListener('mouseleave', () => {
    gallery.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
