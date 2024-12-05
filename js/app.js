// Variable globale
let game = 0; // défi gamification

// Fonction qui vérifie si le cookie est déjà créé
function getCookie(name) 
{
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) 
        {
        const [key, value] = cookies[i].split('=');
        if (key === name) 
        {
            return value;
        }
    }
    return null; // Cookie non trouvé
}

// Fonction qui initialise la gamification
function activateGame() 
{
    if (game === 0) 
        {
        game = 1;
        console.log("La variable game est maintenant :", game);
        alert("Gamification activée !");
        
        // Vérifie si un cookie "session" existe
        if (!getCookie("session")) 
        {
            creation_cookie_session(); 
        } 
        else 
        {
            console.log("Un cookie de session existe déjà :", getCookie("session"));
            alert("Un cookie de session est déjà actif.");
        }
    } 
    else if (game === 1)
    {
        game = 0;
        alert("Gamification désactivée :(");
    }
}

// Fonction pour générer un numéro de session aléatoire
function generateSessionNumber() 
{
    return Math.floor(Math.random() * 1000000); // Un numéro entre 0 et 999999
}

// Fonction pour générer un cookie de session 
function creation_cookie_session() 
{
    const numero_session = generateSessionNumber();
    document.cookie = `session=${numero_session};path=/`; 
    alert("Le cookie a été généré avec le numéro : " + numero_session);
}
