(() => {
    let target = document.getElementById('target');
    let btns = document.getElementsByTagName('button');
    function insertText(content,where,str){
        return content.substr(0,where) + str + content.substr(where + str.length,content.length);
    } 
    
    for(let i = 0; i < btns.length;i++){
        let value = btns[i];
        value.addEventListener ('click' , () => {
            let min = value.getAttribute("data-min");
            let max = value.getAttribute("data-max");
            value.innerText++
            if (value.innerText<10){
                value.innerText = '0' + value.innerText++
            }
            
            if (value.innerText == max){
                value.innerText=min
            }
            let index = 1;
            for(let j = 0; j < i;j++){
                index += btns[j].innerText.length;
            }
            target.innerText = insertText(target.innerText,index,value.innerText);
        })          
    }
})()