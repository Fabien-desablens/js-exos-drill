(() => {
    document.getElementById('run').addEventListener('click', async() => {
        try{
            let posts= await window.lib.getPosts();
            posts.forEach(async function(post){
                try{
                    post.comment = await window.lib.getComments(posts.id);
                }
                catch(err){
                    console.log('erreur', err)
                }
            });
            console.log(posts);
        } catch(err){
            console.log(err)
        }
    })
})();
