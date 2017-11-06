const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');



form.addEventListener('submit', function(e) {
console.log("iiii");    
    let porcent = document.getElementById("porcent").value;
    let de =  document.getElementById("de").value;
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.textContent = porcent +"------"+de;
    contem.appendChild(p1); 
    p2.textContent = "100 ------ 1";
    contem.appendChild(p2);
    p3.textContent = porcent * de +"/"+100+"="+ (porcent * de) / 100;
    contem.appendChild(p3);
    e.preventDefault();
}); 

