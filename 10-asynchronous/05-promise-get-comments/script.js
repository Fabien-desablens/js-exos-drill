
(() => {
    document.getElementById('run').addEventListener('click', ()=>{

    })
})();
window.lib.getPosts().then(function(article){
    article.forEach(article => {
        window.lib.getComments(article.id).then(function (comment){
            article.comment=comment
            console.log(article)
        })
    });
})