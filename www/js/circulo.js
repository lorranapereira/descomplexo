const form = document.getElementById('form');
const contem = document.getElementById('contem');
let img = "undefined";
class Raio {
  constructor(){
    limpa ();
    console.log("entrou");
    let label = document.createElement("label");
    label.textContent = "Dígite o valor do raio (r)";
    let br = document.createElement("BR");
    let input = document.createElement("INPUT");
    input.type = "number";
    input.id="raio";
    let button = document.createElement("BUTTON");
    if (img !="undefined")  contem.removeChild(img);
    img = document.createElement("IMG");
    img.src ="circulo.png";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(contem);
    form.appendChild(label);
    form.appendChild(br);
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(contem);
    contem.appendChild(img);
    
  }
}

function limpa () { 
  let source = document.querySelector("#source").innerHTML;
  let template = Handlebars.compile(source);
  let html = template({
    circulo: {coluna1:"", formula1:"", desenvolvimento1:"", resposta1:"", coluna2:"", formula2: "", desenvolvimento2:"", resposta2:"",coluna3:"", formula3:"", desenvolvimento3:"", resposta3:"",coluna4:"", formula4:"", desenvolvimento4:"", resposta4:"", coluna5:"", formula5: "", desenvolvimento5:"", resposta5:""}
  });
  document.querySelector('thead').innerHTML = html;
  document.getElementById("form").innerHTML = "";
  
}
class Cilindro {
  constructor(){
    limpa();
    let labelR = document.createElement("label");
    labelR.textContent = "Dígite o valor da raio (r)";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let br4 = document.createElement("BR");
    let inputR = document.createElement("INPUT");
    let labelA = document.createElement("label");
    labelA.textContent = "Dígite o valor da altura (h)";
    let inputA = document.createElement("INPUT");
    inputR.type = "number";
    inputR.id = "h";
    inputA.type = "number";
    inputA.id = "r";
    let button = document.createElement("BUTTON");
    if (img != "undefined") contem.removeChild(img);   
    img = document.createElement("IMG");
    img.src = "cilindro.png"
    img.style.width = "100px";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(labelR);
    form.appendChild(br1);
    form.appendChild(inputR);
    form.appendChild(br2);
    form.appendChild(labelA);
    form.appendChild(br3);
    form.appendChild(inputA);
    form.appendChild(br4);
    form.appendChild(button);
    form.appendChild(contem);
    contem.appendChild(img);
  }
}

class Losango {
  constructor(){
    limpa ();
    let labelD = document.createElement("label");
    labelD.textContent = "Dígite o valor da Diagonal menor (D):";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let br4 = document.createElement("BR");
    let inputD = document.createElement("INPUT");
    let labeld = document.createElement("label");
    labeld.textContent = "Dígite o valor da Diagonal menor (d):";
    let inputd = document.createElement("INPUT");
    inputD.type = "number";
    inputD.id = "D";
    inputd.type = "number";
    inputd.id = "d";
    let button = document.createElement("BUTTON");
    if (img != "undefined") contem.removeChild(img);   
    img = document.createElement("IMG");
    img.src = "losango.jpg"
    img.style.width = "100px";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(labelD);
    form.appendChild(br1);
    form.appendChild(inputD);
    form.appendChild(br2);
    form.appendChild(labeld);
    form.appendChild(br3);
    form.appendChild(inputd);
    form.appendChild(br4);
    form.appendChild(button);
    form.appendChild(contem);
    contem.appendChild(img);
    
  }
}

class Quadrado {
  constructor(){
    limpa ();
    let labelA = document.createElement("label");
    labelA.textContent = "Dígite o valor do lado (L):";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let inputA = document.createElement("INPUT");
    inputA.type = "number";
    inputA.id = "L";
    let button = document.createElement("BUTTON");
    if (img != "undefined") contem.removeChild(img);   
    img = document.createElement("IMG");
    img.src = "quadrado.png"
    img.style.width = "150px";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(labelA);
    form.appendChild(br1);
    form.appendChild(inputA);
    form.appendChild(br2);
    form.appendChild(button);
    form.appendChild(br3);
    form.appendChild(contem);
    contem.appendChild(img);
    
  }
}

class Retangulo {
  constructor(){
    limpa ();
    let labelB = document.createElement("label");
    labelB.textContent = "Dígite o valor da base (b):";
    let inputB = document.createElement("INPUT");
    inputB.type = "number";
    inputB.id = "b";
    let labelH = document.createElement("label");
    labelH.textContent = "Dígite o valor da altura (h):";
    let inputH = document.createElement("INPUT");
    inputH.type = "number";
    inputH.id = "h";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let br4 = document.createElement("BR");
    let br5 = document.createElement("BR");
    let button = document.createElement("BUTTON");
    if (img != "undefined") contem.removeChild(img);   
    img = document.createElement("IMG");
    img.src = "retangulo.jpg"
    img.style.width = "150px";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(labelB);
    form.appendChild(br1);
    form.appendChild(inputB);
    form.appendChild(br2);
    form.appendChild(labelH);
    form.appendChild(br3);
    form.appendChild(inputH);
    form.appendChild(br4);
    form.appendChild(button);
    form.appendChild(br5);
    form.appendChild(contem);
    contem.appendChild(img);
    
  }
}

class Isosceles {
  constructor(){
    limpa ();
    let labelB = document.createElement("label");
    labelB.textContent = "Dígite o valor da base (b):";
    let inputB = document.createElement("INPUT");
    inputB.type = "number";
    inputB.id = "b";
    let labelH = document.createElement("label");
    labelH.textContent = "Dígite o valor do lado (L):";
    let inputH = document.createElement("INPUT");
    inputH.type = "number";
    inputH.id = "h";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let br4 = document.createElement("BR");
    let br5 = document.createElement("BR");
    let button = document.createElement("BUTTON");
    if (img != "undefined") contem.removeChild(img);   
    img = document.createElement("IMG");
    img.src = "isosceles.png"
    img.style.width = "150px";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(labelB);
    form.appendChild(br1);
    form.appendChild(inputB);
    form.appendChild(br2);
    form.appendChild(labelH);
    form.appendChild(br3);
    form.appendChild(inputH);
    form.appendChild(br4);
    form.appendChild(button);
    form.appendChild(br5);
    form.appendChild(contem);
    contem.appendChild(img);
    
  }
}

class Equilatero {
  constructor(){
    limpa ();
    let labelB = document.createElement("label");
    labelB.textContent = "Dígite o valor do lado (L):";
    let inputB = document.createElement("INPUT");
    inputB.type = "number";
    inputB.id = "b";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let button = document.createElement("BUTTON");
    if (img != "undefined") contem.removeChild(img);   
    img = document.createElement("IMG");
    img.src = "equilatero.png"
    img.style.width = "150px";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(labelB);
    form.appendChild(br1);
    form.appendChild(inputB);
    form.appendChild(br2);
    form.appendChild(button);
    form.appendChild(br3);
    form.appendChild(contem);
    contem.appendChild(img);
    
  }
}

class TrianguloRetangulo {
  constructor(){
    limpa ();
    let labelB = document.createElement("label");
    labelB.textContent = "Dígite o valor da base (b):";
    let inputB = document.createElement("INPUT");
    inputB.type = "number";
    inputB.id = "b";
    let labelC = document.createElement("label");
    labelC.textContent = "Dígite o valor do lado (c):";
    let inputC = document.createElement("INPUT");
    inputC.type = "number";
    inputC.id = "c";
    let labelH = document.createElement("label");
    let inputH = document.createElement("INPUT");
    labelH.textContent = "Dígite o valor da altura (a):";
    inputH.type = "number";
    inputH.id = "a";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let br4 = document.createElement("BR");
    let br5 = document.createElement("BR");
    let br6 = document.createElement("BR");
    let button = document.createElement("BUTTON");
    if (img != "undefined") contem.removeChild(img);   
    img = document.createElement("IMG");
    img.src = "trianguloRetangulo.png"
    img.style.width = "150px";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(labelH);
    form.appendChild(br1);
    form.appendChild(inputH);
    form.appendChild(br2);
    form.appendChild(labelB);
    form.appendChild(br3);
    form.appendChild(inputB);
    form.appendChild(br4);
    form.appendChild(labelC);
    form.appendChild(br5);
    form.appendChild(inputC);
    form.appendChild(br6);
    form.appendChild(button);
    form.appendChild(contem);
    contem.appendChild(img);
    
  }
}



let selectOption = document.getElementById('selectOption');
selectOption.addEventListener('change', function(){
    let valor = this.value;
    if (valor == "circulo") {
      let classRaio = new Raio();
    }
    if (valor == "cilindro") {
      let classCilindro = new Cilindro();
    }
    if (valor == "losango") {
      let classLosango = new Losango();
    }
    if (valor == "quadrado") {
      let classLosango = new Quadrado();
    }
    if (valor == "retangulo") {
      let classLosango = new Retangulo();
    }
    if (valor == "isosceles") {
      let classLosango = new Isosceles();
    }
    if (valor == "equilatero") {
      let classLosango = new Equilatero();
    }  
    if (valor == "trianguloRetangulo") {
      let classLosango = new TrianguloRetangulo();
    } 
});

form.addEventListener('submit', function(e) {
  let valor = document.getElementById('selectOption').value;
  console.log(valor);
  if (valor == "circulo") {
    let raio = document.getElementById("raio").value;
    raio = parseInt(raio);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaArea = "A = 2 * π²";
    let desenvolArea = "A = 3,14 *"+raio+"²";
    let respostaArea = "A = "+3.14 * raio * raio; 
    let formulaPerimetro = "P = 2πr";
    let desenvolPerimetro = "P = 2 * 3.14 * "+raio;
    let respostaPerimetro = "P = "+2*3.14*raio;
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaArea, desenvolvimento1:desenvolArea, resposta1:respostaArea, coluna2:"Perímetro", formula2: formulaPerimetro, desenvolvimento2:desenvolPerimetro, resposta2:respostaPerimetro}
    });
    document.querySelector('thead').innerHTML = html;
  }
  if (valor == "cilindro") {
    let raio = document.getElementById("r").value;
    raio = parseInt(raio);
    let altura = document.getElementById("h").value;
    altura = parseInt(altura);
    let abase = 3.14 * raio * raio;
    let alateral = 2 * 3.14 * altura * raio;
    let total = 2 * abase - alateral
    let formulaBase = "Abase = π * r²";
    let formulaLateral = "Alateral = 2 * π * r * h";
    let formulaVolume = "V = h * π *r²";
    let formulaTotal = "Atotal = 2 * Abase - Alateral";
    let formulaPer = "P = 2π * h";
    let desenvolBase = "A = 3,14 * "+raio+"²";
    let desenvolLateral = "Alateral = (2 * 3,14 "+raio+") * "+altura;
    let desenvolVolume = "V = "+altura+" * 3,14 *"+raio * raio;
    let desenvolTotal = "Atotal = 2 * "+abase+" - "+alateral;
    let desenvolPer = "P = 2 * 3,14 * "+altura;
    let respostaBase = "Abase = "+abase; 
    let respostaLateral = "Alateral = "+alateral;
    let respostaVolume = "V = "+ abase * altura;
    let respostaTotal = "Atotal = "+total;
    let respostaPer = "P = "+2 * 3.14 * altura ;
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let html = template({
      circulo: {coluna1:"Área da base", formula1:formulaBase, desenvolvimento1:desenvolBase, resposta1:respostaBase, coluna2:"Área lateral", formula2:formulaLateral, desenvolvimento2:desenvolLateral, resposta2:respostaLateral,coluna3:"Volume", formula3:formulaVolume, desenvolvimento3:desenvolVolume, resposta3:respostaVolume,coluna4:"Área total", formula4:formulaTotal, desenvolvimento4:desenvolTotal, resposta4:respostaTotal, coluna5:"Perímetro", formula5: formulaPer, desenvolvimento5:desenvolPer, resposta5:respostaPer}
    });
    document.querySelector('thead').innerHTML = html;
  }

  if (valor == "losango") {
    let D = document.getElementById("D").value;
    D = parseInt(D);
    let d = document.getElementById("d").value;
    d = parseInt(d);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaAreaL = "A = D * d / 2";
    let desenvolAreaL = "A = "+D+" * "+d+"/ 2";
    let respostaAreaL = "A = "+(D * d) / 2; 
    let formulaPerL = "P = 4 * D";
    let desenvolPerL = "P = "+4+" * "+D;
    let respostaPerL = "P = "+4 * D;
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaAreaL, desenvolvimento1:desenvolAreaL, resposta1:respostaAreaL, coluna2:"Perímetro", formula2: formulaPerL, desenvolvimento2:desenvolPerL, resposta2:respostaPerL}
    });
    document.querySelector('thead').innerHTML = html;
  }
  if (valor == "quadrado") {
    let l = document.getElementById("L").value;
    l = parseInt(l);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaArea = "A = L²";
    let formulaPer= "P = L⁴";
    let formulaDia = "D = L² + L²";
    let desenvolArea = "A = "+l+" * "+l;
    let desenvolDia = "D = "+l+"² + "+l+"²";
    let desenvolPer = "P = "+l+" * "+l+" * "+l+" * "+l;
    let respostaArea = "A = "+l*l; 
    let respostaPer = "P = "+4 * l;
    let resol = (2 * l) + (2 * l);
    let respostaDia = "D = "+resol;
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaArea, desenvolvimento1:desenvolArea, resposta1:respostaArea, coluna2:"Perímetro", formula2: formulaPer, desenvolvimento2:desenvolPer, resposta2:respostaPer, coluna3:"Diagonal", formula3:formulaDia, desenvolvimento3:desenvolDia, resposta3:respostaDia}
    });
    document.querySelector('thead').innerHTML = html;
  }
  if (valor == "retangulo") {
    let b = document.getElementById("b").value;
    let h = document.getElementById("h").value;
    let c = document.getElementById("c").value;
    b = parseInt(b);
    h = parseInt(h);
    c = parseInt(c);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaArea = "A = b * h";
    let formulaV= "V = b * h * c";
    let formulaP = "P = 2 * h + 2 * b";
    let desenvolArea = "A = "+b+" * "+h;
    let desenvolV = "V = "+b+" * "+h+" * "+c;
    let desenvolP = "P = "+2+" * "+h+" + "+2+" * "+b;
    let respostaArea = "A = "+b*h; 
    let respostaV = "V = "+ b * h * c;
    let resol = (2 * h) + (2 * b);
    let respostaP = "P = "+resol;
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaArea, desenvolvimento1:desenvolArea, resposta1:respostaArea, coluna2:"Volume", formula2: formulaV, desenvolvimento2:desenvolV, resposta2:respostaV, coluna3:"Perímetro", formula3:formulaP, desenvolvimento3:desenvolP, resposta3:respostaP}
    });
    document.querySelector('thead').innerHTML = html;
  }

  if (valor == "isosceles") {
    let b = document.getElementById("b").value;
    let h = document.getElementById("h").value;
    b = parseInt(b);
    h = parseInt(h);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaArea = "A = (b * L)/2";
    let formulaP = "P = 2 * L + b ";
    let desenvolArea = "A = "+b * h +"/"+2;
    let desenvolP = "P = 2 * "+h+" + "+b;
    let respostaArea = "A = "+(b*h)/2; 
    let conta = (2 * h) + b;
    let respostaP = "P = "+conta;
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaArea, desenvolvimento1:desenvolArea, resposta1:respostaArea,coluna2:"Perímetro", formula2:formulaP, desenvolvimento2:desenvolP, resposta2:respostaP}
    });
    document.querySelector('thead').innerHTML = html;
  }

  if (valor == "equilatero") {
    let b = document.getElementById("b").value;
    b = parseInt(b);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaArea = "A = (l² * √3)/4";
    let formulaP = "P = 3 * L";
    let desenvolArea = "A = ("+b+" * "+b+" * √3)/4 --> ("+b*b+" * "+Math.sqrt(3)+")/"+4;
    let desenvolP = "P = 3 * "+b;
    let respostaArea = "A = "+((b*b)*Math.sqrt(3))/4;
    let respostaP = "P = "+3*b;
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaArea, desenvolvimento1:desenvolArea, resposta1:respostaArea, coluna2:"Perímetro", formula2:formulaP, desenvolvimento2:desenvolP, resposta2:respostaP}
    });
    document.querySelector('thead').innerHTML = html;
  }

  if (valor == "trianguloRetangulo") {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaArea = "A = (b * c)/2";
    let formulaP = "P = (a + b + c)/2";
    let desenvolArea = "A = "+b+" * "+c+"/2 -- > "+b*c+"/2";
    let soma = a+b+c;
    let desenvolP = "P = ("+a+"+"+b+"+"+c+")/2 -- > "+soma+"/2";
    let respostaArea = "A = "+(b*c)/2;
    let respostaP = "P = "+soma/2;
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaArea, desenvolvimento1:desenvolArea, resposta1:respostaArea,coluna2:"Perímetro", formula2:formulaP, desenvolvimento2:desenvolP, resposta2:respostaP}
    });
    document.querySelector('thead').innerHTML = html;
  }
  e.preventDefault();
});


