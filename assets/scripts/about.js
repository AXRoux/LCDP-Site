const cityNames = [
    "Madrid", "Berlin", "Tokyo", "Moscow", "Rio", "Denver", "Helsinki",
    "Oslo", "Nairobi", "Bogota", "Palermo", "Lisbon", "Stockholm", "Manila"
];

function createFloatingCities() {
    const container = document.querySelector('.floating-cities');
    
    for (let i = 0; i < 50; i++) {  // Create 50 floating city names
        const cityElement = document.createElement('div');
        cityElement.classList.add('city-name');
        cityElement.textContent = cityNames[Math.floor(Math.random() * cityNames.length)];
        
        cityElement.style.left = `${Math.random() * 100}%`;
        cityElement.style.top = `${Math.random() * 100}%`;
        cityElement.style.animationDelay = `${Math.random() * 20}s`;
        cityElement.style.animationDuration = `${20 + Math.random() * 10}s`;
        
        container.appendChild(cityElement);
    }
}

document.addEventListener('DOMContentLoaded', createFloatingCities);

// Add this to check if the function is being called
console.log('about.js loaded');