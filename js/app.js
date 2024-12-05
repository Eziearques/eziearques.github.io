//Variable globale
let game = 0; // défi gamification

//fonction qui initialise la gamification
function activateGame() 
{
  if (game == 0)
    {
        game = 1; 
        console.log("La variable game est maintenant :", game);

        alert("Gamification activée !"); 
        creation_cookie_session();
    }
    else if (game == 1)
    {
        game = 0;

        alert("Gamification désactivée :( ")
    }

    
}

// Fonction pour générer un numéro de session aléatoire
function generateSessionNumber() 
{
    return Math.floor(Math.random() * 1000000); // Un numéro entre 0 et 999999
}


//Fonction pour générer un cookie
function creation_cookie_session()
{
    numero_session= generateSessionNumber();

    document.cookie="Session=" + numero_session;
    alert("Le cookie  généré avec le numéro "+ numero_session);
}
