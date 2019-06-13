(() => {
    const one = document.getElementById('part-one');
    const btnOne = document.getElementById('fix-part-one');
    const two = document.getElementById('part-two');
    const btnTwo = document.getElementById('fix-part-two');
    const three = document.getElementById('part-three');
    const btnThree = document.getElementById('fix-part-three');
    const four = document.getElementById('part-four');
    const btnFour = document.getElementById('fix-part-four');
    const target = document.getElementById('target')

    const btns = [one,two,three,four]

    setInterval(() => {
        for(let i = 0; i < btns.length;i++){
            let min = btns[i].getAttribute("data-min");
            let max = btns[i].getAttribute("data-max");
            if(btns[i].value  == max){
                btns[i].value = min
            }else{
                btns[i].value++;
            }
            if (btns[i].value<10){
                btns[i].value='0'+ btns[i].value
            }
        }
        
    },200)

    function insertText(content,where,str){
        return content.substr(0,where) + str + content.substr(where + str.length,content.length);
    }

    btnOne.addEventListener ('click' , () =>  {
        target.innerText = insertText(target.innerText,1,one.value);
    })
    btnTwo.addEventListener ('click' , () => {
        target.innerHTML = insertText(target.innerText,1 + one.value.length,two.value);
    })
    btnThree.addEventListener ('click' , () => {
        target.innerHTML = insertText(target.innerText,1 + one.value.length+two.value.length,three.value);
    })
    btnFour.addEventListener ('click' , () => {
        target.innerHTML = insertText(target.innerText,1 + one.value.length+two.value.length+three.value.length,three.value);
    })
})();
