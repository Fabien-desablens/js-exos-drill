
(() => {
    document.getElementById('run').addEventListener('click', ()=>{
        window.lib.getPosts((error,article) =>{
            if(error===true){
                console.log('il y a une erreur')
            }
            else {
                article.forEach(element => {
                    window.lib.getComments(element.id,(error,article2) =>{
                        if(error===true){
                            console.log('erreur')
                        }
                        else{
                            element.comment=article2;
                            console.log(article)
                        }
                    })
                });
            }
        })
    })
    
    
})();
