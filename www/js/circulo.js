const form = document.getElementById('form');
const contem = document.getElementById('contem');
console.log("entrou");
class Raio {
  constructor(){
    console.log("entrou");
    let label = document.createElement("label");
    label.textContent = "Dígite o valor do raio";
    let br = document.createElement("BR");
    let input = document.createElement("INPUT");
    input.type = "number";
    input.id="raio";
    let button = document.createElement("BUTTON");
    var img = document.createElement("IMG");
    img.src =
    "http://conversor-de-medidas.com/geometria/circulo/area/formula-da-area-do-circulo.png";
    button.type = "submit";
    button.style.width = "100px";
    button.textContent = "Calcular";
    form.appendChild(label);
    form.appendChild(br);
    form.appendChild(input);
    form.appendChild(button);
    contem.appendChild(img);
    
  }
}

class Cilindro {
  constructor(){
   // form.reset();
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
    var img = document.createElement("IMG");
    img.src =
    "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cylinder_geometry.svg/518px-Cylinder_geometry.svg.png";
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
    console.log("kjojoj");
    let raio = document.getElementById("raio").value;
    raio = parseInt(raio);
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let formulaArea = "A = 2 * π²";
    let desenvolArea = "3,14 *"+raio;
    let respostaArea = "A = "+3.14 * raio; 
    let formulaPerimetro = "A = C²/4π";
    let desenvolPerimetro = raio+" = C²/4π --> C² = "+raio+"/4π -->  C = √"+raio+"/4π";
    let respostaPerimetro = "C = "+Math.sqrt(raio /(4 * 3,14));
    let html = template({
      circulo: {coluna1:"Área", formula1:formulaArea, desenvolvimeto1:desenvolArea, resposta1:respostaArea, coluna2:"Perímetro", formula2: formulaPerimetro, desenvolvimeto2:desenvolPerimetro, resposta2:respostaPerimetro}
    });
    document.querySelector('thead').innerHTML = html;
  }
  if (valor == "cilindro") {
    let raio = document.getElementById("r").value;
    let altura = document.getElementById("h").value;
    let source = document.querySelector("#source").innerHTML;
    let template = Handlebars.compile(source);
    let abase = 3.14 * raio * raio;
    let alateral = 2 * 3.14 * altura * raio;
    let formulaBase = "Abase = π * r²";
    let formulaLateral = "Alateral = 2 * π * r * h";
    let formulaVolume = "V = h * π *r²";
    let formulaTotal = "Atotal = 2 * Abase - Alateral";
    let formulaPerimetro = "P = 2π * h";
    let desenvolBase = "3,14 * "+raio+"²";
    let desenvolLateral = "Atotal = (2 * 3,14 "+raio+") - "+altura;
    let desenvolVolume = "V = "+altura+" * 3,14 *"+raio * raio;
    let desenvolTotal = "Atotal = 2 * "+abase+" - "+alateral;
    let desenvolPer = "2 * 3,14 * "+altura;
    let respostaBase = "Abase = "+abase; 
    let respostaLateral = "Alateral = "+alateral;
    let respostaVolume = "V = "+altura* 3.14 * raio * raio;
    let respostaTotal = "Atotal = "+(2 * altura)-alateral ;
    let respostaPer = "P = "+2 * 3.14 * altura ;
    var html = template({
      circulo: {coluna1:"Área da base", formula1:formulaArea, desenvolvimeto1:desenvolArea, resposta1:respostaArea, coluna2:"Área lateral", formula2: formulaPerimetro, desenvolvimeto2:desenvolPerimetro, resposta2:respostaPerimetro,coluna3:"Volume", formula3:formulaVolume, desenvolvimeto1:desenvolVolume, resposta1:respostaVolume,coluna4:"Área total", formula4:formulaArea, desenvolvimeto4:desenvolArea, resposta4:respostaArea, coluna5:"Perímetro", formula5: formulaPerimetro, desenvolvimeto5:desenvolPer, resposta5:respostaPer}
    });
    document.querySelector('thead').innerHTML = html;
  }
  e.preventDefault();
});


