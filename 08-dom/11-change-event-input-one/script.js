let passOne = document.getElementById('pass-one');
(() => {
    passOne.addEventListener('keypress', function(e){
        if (passOne.value.length == 10 ){
            e.preventDefault();
        }
        let valueLength = document.getElementById('pass-one').value.length
        document.getElementById('counter').innerHTML = `${valueLength}/10`
    })
})();
