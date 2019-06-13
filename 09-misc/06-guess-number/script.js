/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let number = Math.round(Math.random()*100)
    console.log(number);
    justeprix()  
    function justeprix(){
        let ask = window.prompt('Donne un nombre de 0 à 100')
        if (ask==number){
            window.alert('Bravo vous avez réussi')
            break;
        }
        if (ask<=number){
            window.alert("C'est plus");
            ask = window.prompt('')
        }
        if (ask>=number){
            window.alert("C'est moins");
            ask = window.prompt('')
        }
    }      
})();
