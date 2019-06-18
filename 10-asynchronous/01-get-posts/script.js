(() => {
    document.getElementById('run').addEventListener('click', ()=>{
        window.lib.getPosts((error,article) =>{
            if(error===true){
                console.log('il y a une erreur')
            }
            else {
                console.log(article)
            }
        })
    })
})();