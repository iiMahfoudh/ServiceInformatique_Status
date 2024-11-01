// frontend/app.js
document.addEventListener('DOMContentLoaded', function () {
    const storeStatusElement = document.getElementById('storeStatus');
    const toggleButton = document.getElementById('toggleButton');
    const API_KEY = 'mysecureapikey123'; // This is the key used to authenticate

    const apiUrl = 'https://648d-41-104-95-134.ngrok-free.app/api/status';

    async function fetchStatus() {
        try {
            console.log('Attempting to fetch status...');
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            storeStatusElement.textContent = data.status;
            storeStatusElement.style.color = data.status === 'Open' ? 'green' : 'red';
        } catch (error) {
            console.error('Error fetching status:', error);
            storeStatusElement.textContent = 'Error loading status';
        }
    }
    
    fetchStatus();
    setInterval(fetchStatus, 1000);
});
