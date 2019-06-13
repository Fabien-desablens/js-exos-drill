(() => {
    const slider = document.getElementById('slider');
    const target = document.getElementById('target');

    slider.addEventListener('mousemove',() => {
        const value = slider.value
        target.innerText = '+' + value
    })
})();