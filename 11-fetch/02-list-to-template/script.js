(() => {
    let template = document.getElementById("tpl-hero").content
    let target = document.getElementById("target");

    document.getElementById('run').addEventListener("click",() => {
        console.log(name);

        fetch("http://localhost:3000/heroes").then(blob => {
            console.log(blob)
            return blob.json()
        }).then(value => {
            value.forEach(element => {
                let clone = template.cloneNode(true);

                let name = clone.querySelector(".name");
                let alterEgo = clone.querySelector(".alter-ego");
                let abilities = clone.querySelector(".powers");

                name.innerText = element.name;
                alterEgo.innerText = element.alterEgo;
                abilities.innerText = element.abilities;

                target.appendChild(clone)
            });  
        }).catch(function (err){ // Si la promesse ne s'execute pas correctement
            console.log("Il y a une erreur", err); // Tu log dans la console qu'il y a eu une erreur et tu ajoute l'erreur
        });
    })
})();