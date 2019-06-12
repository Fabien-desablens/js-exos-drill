(() => {
    function tableCreate(){
        var body = document.body,
            tbl  = document.createElement('table');
        tbl.style.width  = '500px';
        tbl.style.border = '1px solid black';
        tbl.style.background = 'blue';
        tbl.style.textAlign= 'center';
        tbl.style.margin= 'auto';
    
        for(let i = 0; i < 1; i++){
            let tr = tbl.insertRow();
            for(let j = 0; j < 10; j++){
                if(i == 2 && j == 1){
                    break;
                } else {
                    let td = tr.insertCell();
                    td.appendChild(document.createTextNode('Cell'));
                    td.style.border = '1px solid black';
                    if(i == 1 && j == 1){
                        td.setAttribute('rowSpan', '2');
                    }
                }
            }
        }
        
        document.getElementById('target').appendChild(tbl);
    }
    tableCreate();
})();