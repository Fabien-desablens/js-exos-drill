/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        passOne=document.getElementById('pass-one');
        passTwo=document.getElementById('pass-two');
        if (passOne.value!=passTwo.value){
            document.getElementById('pass-one').classList.add('error');
            document.getElementById('pass-two').classList.add('error')
        }
    })
})();
