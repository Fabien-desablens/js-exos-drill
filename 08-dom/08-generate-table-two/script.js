(() => {
    function tableCreate(){
        var body = document.body,
            tbl  = document.createElement('table');
        tbl.style.width  = '800px';
        tbl.style.border = '1px solid black';
        tbl.style.background = 'blue';
        tbl.style.textAlign= 'center';
        tbl.style.margin= 'auto';
    
        for(let i = 0; i < 11; i++){
            let tr = tbl.insertRow();
            for(let j = 1; j < 11; j++){
                    var td = tr.insertCell();
                    let calcul = i*j;
                    td.appendChild(document.createTextNode(`${i}x${j} = ${calcul}`))
                    td.style.border = '1px solid black';
            }
        }        
        document.getElementById('target').appendChild(tbl);
    }
    tableCreate();
})();