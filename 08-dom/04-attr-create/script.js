/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let remove = document.getElementById('source');    
    let data = document.getElementById('source').getAttribute('data-image');    
    let target = document.getElementById('target');    
    let newEl = document.createElement('img');
    newEl.setAttribute("data-image",data);
    target.appendChild(newEl);    
    let material = document.getElementsByClassName('material');
    material[0].removeChild(remove);
})();