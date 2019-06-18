(() => {
    document.getElementById('run').addEventListener('click', ()=>{
        window.lib.getPersons((error,article) =>{
            if(error!=null){
                console.error('il y a une erreur')
            }
            else {
                console.log(article)
            }
        })
    })
})();
