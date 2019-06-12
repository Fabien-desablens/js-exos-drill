        let passOne = document.getElementById('pass-one');
        let passTwo = document.getElementById('pass-two');
        (() => {
    document.getElementById('run').addEventListener('click', () => {
        if(passTwo.value != passOne.value ){
                passOne.style.borderColor = 'red';
                passTwo.style.borderColor = 'red';
        }
    })
})();
