

async function getHistoricalWeather(lat, lon, timestamp) {
    const API_KEY = 'votre_cle_api'; // Remplacez par votre clé API
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&units=metric&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Données non trouvées');
        }
        const data = await response.json();
        displayHistoricalWeather(data);
    } catch (error) {
        alert(error.message);
    }
}
