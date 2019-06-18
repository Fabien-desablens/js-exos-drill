(() => {
    document.getElementById('run').addEventListener('click', async() =>{
        try {
            console.log(await window.lib.getPosts())
        }
        catch(err){
            console.error(err)
        }        
    })
})();