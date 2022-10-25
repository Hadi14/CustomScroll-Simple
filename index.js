const d = document.querySelector('div');
const b = document.body;
window.addEventListener('scroll', () => {

    console.log("***************");
    console.log("Window.ScrollY: " + window.scrollY);
    console.log("Body.clientHeigh: " + b.clientHeight);
    console.log("Window.innerHeight: " + window.innerHeight);

    let sy = window.scrollY;
    let ch = b.clientHeight;
    let ih = window.innerHeight;
    let sp = Math.round((sy / (ch - ih)) * 100)
    // console.log(sp d.style.width = sp + "%";
})
