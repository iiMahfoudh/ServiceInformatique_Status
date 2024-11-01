// frontend/app.js

const storeStatusElement = document.getElementById('storeStatus');

// Fetch the current store status from the backend
async function fetchStatus() {
    try {
        const response = await fetch('http://localhost:5000/api/status');
        const data = await response.json();
        storeStatusElement.textContent = data.status;
        storeStatusElement.style.color = data.status === 'Open' ? 'green' : 'red';
    } catch (error) {
        console.error('Error fetching status:', error);
        storeStatusElement.textContent = 'Error loading status';
    }
}

// Fetch status initially, then every 1 second (1000 ms)
fetchStatus();
setInterval(fetchStatus, 1000);
