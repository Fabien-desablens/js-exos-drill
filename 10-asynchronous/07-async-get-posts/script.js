
(() => {
    document.getElementById('run').addEventListener('click', async() =>{
        try{
            let posts = await window.locationbar.getPosts();
            console.log(posts);
        }catch(err) {
            console.log('y a une irour', err)
        }
    })
})();