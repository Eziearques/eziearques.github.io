//Liste des pays 
const countryCapitals = {
    AE: "AbuDhabi",
    AF: "Kabul",
    AL: "Tirana",
    AM: "Yerevan",
    AO: "Luanda",
    AQ: "None",
    AR: "BuenosAires",
    AT: "Vienna",
    AU: "Canberra",
    AZ: "Baku",
    BA: "Sarajevo",
    BD: "Dhaka",
    BE: "Brussels",
    BF: "Ouagadougou",
    BG: "Sofia",
    BI: "Gitega",
    BJ: "PortoNovo",
    BN: "BandarSeriBegawan",
    BO: "Sucre",
    BR: "Brasilia",
    BS: "Nassau",
    BT: "Thimphu",
    BW: "Gaborone",
    BY: "Minsk",
    BZ: "Belmopan",
    CA: "Ottawa",
    CD: "Kinshasa",
    CF: "Bangui",
    CG: "Brazzaville",
    CH: "Bern",
    CI: "Yamoussoukro",
    CL: "Santiago",
    CM: "Yaounde",
    CN: "Beijing",
    CO: "Bogota",
    CR: "SanJose",
    CU: "Havana",
    CY: "Nicosia",
    CZ: "Prague",
    DE: "Berlin",
    DJ: "Djibouti",
    DK: "Copenhagen",
    DO: "SantoDomingo",
    DZ: "Algiers",
    EC: "Quito",
    EE: "Tallinn",
    EG: "Cairo",
    ER: "Asmara",
    ES: "Madrid",
    ET: "AddisAbaba",
    FK: "Stanley",
    FI: "Helsinki",
    FJ: "Suva",
    FR: "Paris",
    GA: "Libreville",
    GB: "London",
    GE: "Tbilisi",
    GF: "Cayenne",
    GH: "Accra",
    GL: "Nuuk",
    GM: "Banjul",
    GN: "Conakry",
    GQ: "Malabo",
    GR: "Athens",
    GT: "GuatemalaCity",
    GW: "Bissau",
    GY: "Georgetown",
    HN: "Tegucigalpa",
    HR: "Zagreb",
    HT: "PortauPrince",
    HU: "Budapest",
    ID: "Jakarta",
    IE: "Dublin",
    IL: "Jerusalem",
    IN: "NewDelhi",
    IQ: "Baghdad",
    IR: "Tehran",
    IS: "Reykjavik",
    IT: "Rome",
    JM: "Kingston",
    JO: "Amman",
    JP: "Tokyo",
    KE: "Nairobi",
    KG: "Bishkek",
    KH: "PhnomPenh",
    KP: "Pyongyang",
    KR: "Seoul",
    XK: "Pristina",
    KW: "KuwaitCity",
    KZ: "Astana",
    LA: "Vientiane",
    LB: "Beirut",
    LK: "Colombo",
    LR: "Monrovia",
    LS: "Maseru",
    LT: "Vilnius",
    LU: "Luxembourg",
    LV: "Riga",
    LY: "Tripoli",
    MA: "Rabat",
    MD: "Chisinau",
    ME: "Podgorica",
    MG: "Antananarivo",
    MK: "Skopje",
    ML: "Bamako",
    MM: "Naypyidaw",
    MN: "Ulaanbaatar",
    MR: "Nouakchott",
    MW: "Lilongwe",
    MX: "MexicoCity",
    MY: "KualaLumpur",
    MZ: "Maputo",
    NA: "Windhoek",
    NC: "Noumea",
    NE: "Niamey",
    NG: "Abuja",
    NI: "Managua",
    NL: "Amsterdam",
    NO: "Oslo",
    NP: "Kathmandu",
    NZ: "Wellington",
    OM: "Muscat",
    PA: "PanamaCity",
    PE: "Lima",
    PG: "PortMoresby",
    PH: "Manila",
    PK: "Islamabad",
    PL: "Warsaw",
    PR: "SanJuan",
    PS: "Ramallah",
    PT: "Lisbon",
    PY: "Asuncion",
    QA: "Doha",
    RO: "Bucharest",
    RS: "Belgrade",
    RU: "Moscow",
    RW: "Kigali",
    SA: "Riyadh",
    SB: "Honiara",
    SD: "Khartoum",
    SE: "Stockholm",
    SI: "Ljubljana",
    SJ: "Longyearbyen",
    SK: "Bratislava",
    SL: "Freetown",
    SN: "Dakar",
    SO: "Mogadishu",
    SR: "Paramaribo",
    SS: "Juba",
    SV: "SanSalvador",
    SY: "Damascus",
    SZ: "Mbabane",
    TD: "N'Djamena",
    TF: "PortauxFrancais",
    TG: "Lome",
    TH: "Bangkok",
    TJ: "Dushanbe",
    TL: "Dili",
    TM: "Ashgabat",
    TN: "Tunis",
    TR: "Ankara",
    TT: "PortofSpain",
    TW: "Taipei",
    TZ: "Dodoma",
    UA: "Kyiv",
    UG: "Kampala",
    US: "WashingtonDC",
    UY: "Montevideo",
    UZ: "Tashkent",
    VE: "Caracas",
    VN: "Hanoi",
    VU: "PortVila",
    YE: "Sanaa",
    ZA: "Pretoria",
    ZM: "Lusaka",
    ZW: "Harare"
  };


  const API_KEY = '87675f9bb440b8028ce5912a481e7a22'; 


  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code'); // 'code' est le nom du paramètre


// Fonction pour récupérer les prévisions météo
async function getWeatherForecast(countryCode) {
    const city = countryCapitals[countryCode.toUpperCase()]; // Utiliser le code pays pour trouver la capitale
    if (!city) {
        alert('Code de pays non valide');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Ville non trouvée');
        }
        const data = await response.json();
        displayForecast(data); // Afficher les prévisions
    } catch (error) {
        alert(error.message);
    }
}

// Fonction pour afficher les prévisions météo et le graphique
function displayForecast(data) {
    document.getElementById('city-name').textContent = `Prévisions pour ${data.city.name}`;
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // Effacer les prévisions précédentes

    const temperatures = [];
    const labels = [];

    // Extraire les températures et les dates
    data.list.forEach(item => {
        if (new Date(item.dt * 1000).getHours() === 12) { 
            temperatures.push(item.main.temp);  // Température en °C
            labels.push(new Date(item.dt * 1000).toLocaleDateString());  // Date
        }
    });

    // Afficher le graphique
    displayChart(temperatures, labels);
}

// Fonction pour afficher le graphique avec Chart.js
function displayChart(temperatures, labels) {
    const ctx = document.getElementById('forecast-chart').getContext('2d');
    if (!ctx) {
        console.error("Le canvas n'a pas été trouvé.");
        return;
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Température (°C)',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Date' }
                },
                y: {
                    title: { display: true, text: 'Température (°C)' }
                }
            }
        }
    });
}

// Si un code pays est passé dans l'URL, récupérer les prévisions automatiquement
if (code) {
    getWeatherForecast(code);
}

// Écouter l'événement 'blur' sur l'entrée du code pays
document.getElementById('country-code').addEventListener('blur', () => {
    const countryCode = document.getElementById('country-code').value.trim();
    if (countryCode) {
        getWeatherForecast(countryCode); // Appel de la fonction pour récupérer les prévisions
    } else {
        alert('Veuillez entrer un code de pays');
    }
});