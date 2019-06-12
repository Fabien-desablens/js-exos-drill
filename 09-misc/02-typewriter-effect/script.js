(() => {
    let target = document.getElementById('target')
    function printLetterByLetter(destination, message, speed){
        let i = 0;
        let interval = setInterval(function(){
            target.innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(interval);
            }
        }, speed);
    } 
    speed = (Math.random()*1000)
    console.log(speed)
    printLetterByLetter(target, "Hello world, bonjour le monde.", speed);
})();