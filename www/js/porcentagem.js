const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');



form.addEventListener('submit', function(e) {
    let porcent = document.getElementById("porcent").value;
    let de =  document.getElementById("de").value;
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");

    p1.textContent = porcent +"% - - - - "+de;
    p2.textContent = "100% - - - - x";
    p3.textContent = porcent +"x = "+ 100 * de;
    p4.textContent = "x = "+ 100 * de+"/"+porcent;
    p5.textContent = "x = "+ (100 * de)/porcent; 
    contem.appendChild(p1); 
    contem.appendChild(p2);
    contem.appendChild(p3);
    contem.appendChild(p4);
    contem.appendChild(p5);
    e.preventDefault();
});

