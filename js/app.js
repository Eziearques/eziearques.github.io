// Variable globale
let game = 0; // défi gamification
const sitePages = [
    'page_html/page1.html',
    'page_html/page2.html',
    'page_html/page3.html',
    'page_html/page4.html',
    'page_html/page5.html'
];

// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === name) {
            return decodeURIComponent(value); // Retourne la valeur décodée
        }
    }
    return null; // Cookie non trouvé
}

// Fonction pour définir un cookie
function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;`;
}

// Fonction qui initialise la gamification
function activateGame() {
    if (game === 0) {
        game = 1;
        console.log("La variable game est maintenant :", game);
        alert("Gamification activée !");
        
        // Vérifie si un cookie "session" existe
        if (!getCookie("session")) {
            creation_cookie_session();
        } else {
            console.log("Un cookie de session existe déjà :", getCookie("session"));
            alert("Un cookie de session est déjà actif.");
        }
    } else if (game === 1) {
        game = 0;
        alert("Gamification désactivée :(");
    }
}

// Fonction pour générer un numéro de session aléatoire
function generateSessionNumber() {
    return Math.floor(Math.random() * 1000000); // Un numéro entre 0 et 999999
}

// Fonction pour générer un cookie de session
function creation_cookie_session() {
    const numero_session = generateSessionNumber();
    setCookie('session', numero_session);
    alert("Le cookie a été généré avec le numéro : " + numero_session);
}

// Fonction pour réinitialiser les cookies
function resetVisitedPages() {
    document.cookie = "visitedPages=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    alert("Tous les cookies ont été supprimés.");
}

// Fonction pour afficher une image avec succès
function showImageOnSuccess(nom_succes) {
    const image = document.createElement('img'); // Crée un élément image
    image.src = 'img/succes/' + nom_succes + '.png'; // Chemin de votre image
    image.alt = 'Succès'; // Ajoute un texte alternatif
    image.className = 'animated-image'; // Ajoute la classe CSS pour les styles/animations

    document.body.appendChild(image); // Ajoute l'image au body

    // Supprime l'image après 3 secondes
    setTimeout(() => {
        image.remove();
    }, 3000);
}

// Récupérer les pages visitées à partir du cookie
let visitedPages = getCookie('visitedPages');
visitedPages = visitedPages ? visitedPages.split(',') : [];

// Identifier la page actuelle
const currentPage = window.location.pathname.replace(/^\//, ''); // Extrait le chemin relatif

// Ajouter la page actuelle aux pages visitées si elle n'est pas déjà présente
if (!visitedPages.includes(currentPage)) {
    visitedPages.push(currentPage);
    setCookie('visitedPages', visitedPages.join(',')); // Met à jour le cookie
}

// Vérifier si toutes les pages ont été visitées
if (sitePages.every(page => visitedPages.includes(page))) {
    showImageOnSuccess('Explorateur'); // Appelle la fonction avec le nom de l'image
}
