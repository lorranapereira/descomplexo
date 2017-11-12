const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    m = document.getElementById("m").value;
    j = document.getElementById("j").value;
    i = document.getElementById("i").value;
    t = document.getElementById("t").value;
    c = document.getElementById("c").value; 
    if(m=="x"){
        m = document.getElementById("m").value;
        j = Number(document.getElementById("j").value);
        i = Number(document.getElementById("i").value);
        t = Number(document.getElementById("t").value);
        c = Number(document.getElementById("c").value);
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p3 = document.createElement("p");
        p4 = document.createElement("p");
        p5 = document.createElement("p");
        p1.textContent = "M = C * (1 + i)^t";
        p2.textContent = "M = "+c+" * (1 + "+i+"/100)^"+t;
        p3.textContent = "M = "+c+" * ("+Number((i/100)+1)+")^"+t;
        p4.textContent = "M = "+c+" * "+Math.pow(Number((i/100)+1),t);
        p5.textContent = "M = "+Number(c)*Math.pow(Number((i/100)+1),t);
        contem.appendChild(p1);
        contem.appendChild(p2);
        contem.appendChild(p3);
        contem.appendChild(p4);
        contem.appendChild(p5);
    }
/* envolve o logaritmo e o i falta  if (i == "x") {
        m = Number(document.getElementById("m").value);
        j = Number(document.getElementById("j").value);
        i = document.getElementById("i").value;
        t = Number(document.getElementById("t").value);
        c = Number(document.getElementById("c").value);
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p3 = document.createElement("p");
        p4 = document.createElement("p");
        p1.textContent = "J = C * i * T";
        p2.textContent = j+"="+ c*t+"i/100";
        p3.textContent = c*t+"i = "+j+" * 100";
        p4.textContent = "i = "+((j*100)/(c*t)) +"% = "+((j*100)/(c*t))/100;
        contem.appendChild(p1);
        contem.appendChild(p2);
        contem.appendChild(p3);
        contem.appendChild(p4);
    }*/
    if (c == "x") {
        console.log("plpl");
        m = Number(document.getElementById("m").value);
        j = Number(document.getElementById("j").value);
        i = Number(document.getElementById("i").value);
        t = Number(document.getElementById("t").value);
        c = document.getElementById("c").value;
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p3 = document.createElement("p");
        p4 = document.createElement("p");
        p5 = document.createElement("p");
        p1.textContent = "M = C * (1 + i)^t";
        p2.textContent = m+" = C * (1 + "+i+"/100)^"+t;
        p3.textContent = m+" = C * ("+Number((i/100)+1)+")^"+t;
        p4.textContent = m+" = C * "+Math.pow(Number((i/100)+1),t);
        p5.textContent = "C = "+m+"/"+Math.pow(Number((i/100)+1),t)+" = "+m/Math.pow(Number((i/100)+1),t);
        contem.appendChild(p1);
        contem.appendChild(p2);
        contem.appendChild(p3);
        contem.appendChild(p4);
        contem.appendChild(p5);
    }
    e.preventDefault();
});
