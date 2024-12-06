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


  const API_KEY = '3c6d8ee4793a49e3ac1db76e5db923bd'; 


// Fonction pour récupérer les prévisions météo
async function getWeatherForecast(city) {
    city = countryCapitals[city]; // On récupère la capitale en fonction du pays
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
        displayForecast(data); // Appel de la fonction pour afficher les prévisions
    } catch (error) {
        alert(error.message);
    }
}

// Fonction pour afficher les prévisions météo
function displayForecast(data) {
    document.getElementById('city-name').textContent = `Prévisions pour ${data.city.name}`;
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // Clear previous forecasts

    data.list.forEach(item => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <p>Date: ${new Date(item.dt * 1000).toLocaleString()}</p>
            <p>Température: ${item.main.temp}°C</p>
            <p>Conditions: ${item.weather[0].description}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });

    document.getElementById('weather-result').style.display = 'block';
}

// Ajouter un écouteur d'événement pour récupérer les prévisions
document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeatherForecast(city); // Appel de la fonction avec le pays (capitale)
    } else {
        alert('Veuillez entrer un code de pays');
    }
});



