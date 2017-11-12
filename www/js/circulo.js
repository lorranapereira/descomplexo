const form = document.getElementById('form');
const contem = document.getElementById('contem');
let img = "undefined";
class Raio {
  constructor(){
    limpa ();
    console.log("entrou");
    let label = document.createElement("label");
    label.textContent = "Dígite o valor do raio";
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
    labelR.textContent = "Dígite o valor da raio";
    let br1 = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let br4 = document.createElement("BR");
    let inputR = document.createElement("INPUT");
    let labelA = document.createElement("label");
    labelA.textContent = "Dígite o valor da altura";
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

let selectOption = document.getElementById('selectOption');
selectOption.addEventListener('change', function(){
    let valor = this.value;
    if (valor == "circulo") {
      let classRaio = new Raio();
    }
    if (valor == "cilindro") {
      let classRaio = new Cilindro();
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
  e.preventDefault();
});


