(() => {
    let el = document.getElementsByTagName('img');
    let dataenter = el[0].getAttribute('data-hover');
    let dataout = el[0].getAttribute('src');

    el [0].addEventListener('mouseenter', () => {
        el[0].setAttribute('src',dataenter)
    })
    el [0].addEventListener('mouseout', () => {
        let data = el[0].getAttribute('data-hover');
        el[0].setAttribute('src',dataout)
    })
})();