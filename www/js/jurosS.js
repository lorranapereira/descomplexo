const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    m = document.getElementById("m").value;
    j = document.getElementById("j").value;
    i = document.getElementById("i").value;
    t = document.getElementById("t").value;
    c = document.getElementById("c").value;
    if(m == "x" && j == "x") {
        m = document.getElementById("m").value;
        j = document.getElementById("j").value;
        i = parseInt(document.getElementById("i").value);
        t = parseInt(document.getElementById("t").value);
        c = parseInt(document.getElementById("c").value);
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p3 = document.createElement("p");
        p4 = document.createElement("p");
        p1.textContent = "J = C * i * T";
        p2.textContent = "J = "+c+"*"+i+"/100"+"*"+t+" = "+c*i*(t/100);
        p3.textContent = "M = C + J";
        p4.textContent = "M = "+parseInt(c*(i/100)*t+c);
        contem.appendChild(p1);
        contem.appendChild(p2);
        contem.appendChild(p3);
        contem.appendChild(p4);
        return "";
    }
    if(m=="x"){
        m = document.getElementById("m").value;
        j = parseInt(document.getElementById("j").value);
        i = parseInt(document.getElementById("i").value);
        t = parseInt(document.getElementById("t").value);
        c = parseInt(document.getElementById("c").value);
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p1.textContent = "M = C + J";
        p2.textContent = "M = "+c+" + "+j+"="+parseInt((c*(i/100)*t)+c);
        contem.appendChild(p1);
        contem.appendChild(p2);
    }
    if(j=="x"){
        m = parseInt(document.getElementById("m").value);
        j = document.getElementById("j").value;
        i = parseInt(document.getElementById("i").value);
        t = parseInt(document.getElementById("t").value);
        c = parseInt(document.getElementById("c").value);
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p1.textContent = "J = C * i * T";
        p2.textContent = "J = "+c+"*"+i+"/100 * "+t+" = "+c*(i/100)*t;
        contem.appendChild(p1);
        contem.appendChild(p2);
    }
    if (i == "x") {
        m = parseInt(document.getElementById("m").value);
        j = parseInt(document.getElementById("j").value);
        i = document.getElementById("i").value;
        t = parseInt(document.getElementById("t").value);
        c = parseInt(document.getElementById("c").value);
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
    }
    if (c == "x") {
        m = parseInt(document.getElementById("m").value);
        j = parseInt(document.getElementById("j").value);
        i = parseInt(document.getElementById("i").value);
        t = parseInt(document.getElementById("t").value);
        c = document.getElementById("c").value;
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p3 = document.createElement("p");
        p4 = document.createElement("p");
        p1.textContent = "J = C * i * T";
        p2.textContent = j+" = C * "+i+"/100 * "+t;
        p3.textContent = j+" = "+i/100 * t+"C";
        p4.textContent = "C = "+(j/(i/100 * t));
        contem.appendChild(p1);
        contem.appendChild(p2);
        contem.appendChild(p3);
        contem.appendChild(p4);
    }
    e.preventDefault();
});
