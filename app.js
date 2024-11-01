const apiUrl = 'https://648d-41-104-95-134.ngrok-free.app/api/status';


async function fetchStatus() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        storeStatusElement.textContent = data.status;
        storeStatusElement.style.color = data.status === 'Open' ? 'green' : 'red';
    } catch (error) {
        console.error('Error fetching status:', error);
        storeStatusElement.textContent = 'Error loading status';
    }
}

setInterval(fetchStatus, 5000);  // Refresh status every 5 seconds

