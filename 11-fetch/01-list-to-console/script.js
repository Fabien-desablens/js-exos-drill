
(() => {
    document.querySelector('#run').addEventListener('click', function() {
        fetch("http://localhost:3000/heroes").then(function(response) { // On utilise la methode "Fetch" pour appeler l'API , .then est utilisé pour acceder au resultat d'une promesse
        return response.json(); // La méthode json() de Body lit un Stream Response jusqu'au bout. Elle retourne une promesse qui se résout en renvoyant le corps de la requête en JSON.
        }).then(function(res) { // Si la promesse est executé
                console.log(res); // Tu log dans la console res , res represente le resultat de la fonction qui appel localhost
        }).catch(function (err){ // Si la promesse ne s'execute pas correctement
                console.log("Il y a une erreur", err); // Tu log dans la console qu'il y a eu une erreur et tu ajoute l'erreur
        });
        });
})();