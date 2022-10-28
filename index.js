const d = document.querySelector('div');
const h2 = document.querySelector('h2');
const b = document.body;
const ar = [
    { Name: "Hadi", age: 10 },
    { Name: "Reza", age: 18 },
    { Name: "Ahmad", age: 16 },
    { Name: "Ugf", age: 12 }
]


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
let x = new URLSearchParams(location.search)
let id = x.get('id');
console.log(id);

let ag = ar.find((item) => {
    return item.age == id
})

console.log(ag)
if (ag) {
    h2.innerHTML = ag.Name + "   " + ag.age;
}
else {
    h2.innerHTML = "Not Found"
}