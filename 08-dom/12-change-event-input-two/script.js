    let pass = document.getElementById('pass-one');
(() => {
    pass.addEventListener('keyup', () =>{
        let length = pass.value.length;
        let counter = 0;
        for(let i = 0; i < length;i++){
            if(pass.value[i] >= '0' && pass.value[i] <= '9'){
                counter++;
            }
        }
        if (pass.value.length > 8 && counter >= 2){
            document.getElementById('validity').innerText = "C'est ok";
        }else{
            document.getElementById('validity').innerText = "Pas ok";
        }    
    })
    
})();
