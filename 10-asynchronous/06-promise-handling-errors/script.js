
(() => {
    (() => {
        document.getElementById('run').addEventListener('click', ()=>{
            window.lib.getPersons().then(function (res){
                console.log(res)
            })
            .catch(function (err){
                console.log(err)
            })
        })
    })();
})();
