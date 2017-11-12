const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    valorx1 = document.getElementById('x1').value;
    console.log(valorx1);
    valory1 = document.getElementById('y1').value;
    valorx2 = document.getElementById('x2').value;
    valory2 = document.getElementById('y2').value;
    let proporcao = new Valida(valorx1,valory1,valorx2,valory2);
    e.preventDefault();
});

class Proporcao {
    constructor (valorx1,valory1,valorx2,valory2,incognitas,vetor){
        let html="";
        this.valorx1 = valorx1;
        this.valorx2 = valorx2;
        this.valory1 = valory1;
        this.valory2 = valory2;
        
        for (var i = 0; i < 4; i++) {
            let p1 = document.createElement('P');
            let p2 = document.createElement('P');
            let p3 = document.createElement('P');
            let p4 = document.createElement('P');
            let p5 = document.createElement('P');
            let p6 = document.createElement('P');
            console.log(incognitas);
            if (vetor[i] == incognitas) {
                p1.textContent = this.valorx1+" - - - - "+this.valory1;
                p2.textContent = this.valorx2+" - - - - "+this.valory2;               
                if (i == 0 || i == 3) {
                    if (this.valorx1 == incognitas) {
                        p3.textContent = this.valory2+this.valorx1+"="+parseInt(this.valorx2) * parseInt(this.valory1);
                        p4.textContent = this.valorx1+"="+parseInt(this.valorx2) * parseInt(this.valory1)+"/"+this.valory2;
                        p5.textContent = (parseInt(this.valorx2) * parseInt(this.valory1))/parseInt(this.valory2);
                    }           
                    else{
                        p3.textContent = this.valory2 + this.valorx1+" = "+parseInt(this.valory1) * parseInt(this.valorx2);
                        p4.textContent = this.valorx1+"="+parseInt(this.valory1) * parseInt(this.valorx2)+"/"+parseInt(this.valory2);
                        p5.textContent = (parseInt(this.valorx2) * parseInt(this.valory1))/parseInt(this.valory2);    
                    }
                }
                if (i == 1 || i == 2){
                    if (this.valory1 == incognitas ) {
                        p3.textContent = this.valorx2+this.valory1+"="+parseInt(this.valorx1) * parseInt(this.valory2);
                        p4.textContent = this.valory1+"="+parseInt(this.valorx1) * parseInt(this.valory2)+"/"+this.valorx2;
                        p5.textContent = (parseInt(this.valorx1) * parseInt(this.valory2))/this.valorx2;
                    }           
                    else{
                        p3.textContent = this.valory1+this.valorx2+"="+parseInt(this.valorx1) * parseInt(this.valory2);
                        p4.textContent = this.valorx2+"="+parseInt(this.valorx1) * parseInt(this.valory2)+"/"+this.valory1;
                        p5.textContent = (parseInt(this.valorx1) * parseInt(this.valory2))/this.valory1;    
                    }
                }
                contem.appendChild(p1);
                contem.appendChild(p2);
                contem.appendChild(p3);
                contem.appendChild(p4);
                contem.appendChild(p5);
                return "";
            } 
        }
    }
}

class Valida{
    constructor(valorx1,valory1,valorx2,valory2){
        let vetor = new Array(4);
        vetor = [valorx1,valory1,valorx2,valory2];
        this.valorx1 = valorx1;
        this.valorx2 = valorx2;
        this.valory1 = valory1;
        this.valory2 = valory2;
        let notnumber = "";
        let tem = 0;
        let pos = "";
        let incognitas="";
        for (var i = 0; i < 4; i++) {
            let isnumber = !isNaN(parseFloat(vetor[i])) && isFinite(vetor[i]);
            console.log(vetor[i]);
            if(isnumber == false){
                if(vetor[i] == "x" || vetor[i] == "y"){
                    incognitas+=vetor[i]; 
                    pos=i;
                    tem++;
                    if (tem == 2) {
                        return ("Apenas duas incógnitas");
                    }
                }
                else {
                    return ("ERRO está incognita é inválida, pois elas devem ser apenas x ou y");
                }
            }
        }
        this.incognitas = incognitas;
        this.pos = pos;
        this.vetor = vetor;
        console.log(this.incognitas);
        let proporcao = new Proporcao(this.valorx1,this.valory1,this.valorx2,this.valory2,this.incognitas,vetor);
    }
}
