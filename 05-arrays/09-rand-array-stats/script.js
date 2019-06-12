(() => {
    let array = [];
    let tr = document.querySelector('table tr').children;
    let resultat = 0;
    document.getElementById('run').addEventListener('click', () => {
        for (let i = 0; i < tr.length; i++) {
            array.push(Math.round(Math.random() * 100));
            tr[i].innerHTML = array[i];
            document.getElementById('min').innerHTML = Math.min(...array);
            document.getElementById('max').innerHTML = Math.max(...array);
            resultat += array[i];
            document.getElementById('sum').innerHTML = resultat;
            document.getElementById('average').innerHTML = resultat / tr.length;
        }
    })
})();