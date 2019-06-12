(() => {
    const str = document.getElementById('target');
    let newArray = str.textContent.split('');
    str.innerText = ""
    let array = ['20px', '40px', '60px', '80px', '100px']

    let switcher = true;
    let j = 0;

    for(let i in newArray){
        let span = document.createElement("span");
        span.textContent = newArray[i];
        if(j == array.length - 1){
            switcher = false;
        }else if(j == 0){
            switcher = true;
        }
        if(switcher){
            j++
        }else{
            j--;
        }
        span.style.fontSize = array[j]
        str.appendChild(span);
    }
})();