const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    valorx = parseInt(document.getElementById('x').value);
    valory = parseInt(document.getElementById('y').value);
    console.log("oii");
    let razao = new Razao(valorx,valory) ;
    e.preventDefault();
});
class Razao {
    constructor(valorx,valory) {
        this.x = valorx;
        this.y = valory;
        this.maior = Math.max(this.x,this.y); 
        this.menor = Math.min(this.x,this.y); 
        let html="";
        if (this.maior%this.menor == 0) {
            if(this.x>this.y){
                html += this.x+"/"+this.y+" = "+this.maior/this.menor+"/"+this.menor/this.menor;
            }
            else{
                html += this.x+"/"+this.y+" = "+this.menor/this.menor+"/"+this.maior/this.menor;
            }
                let p = document.createElement('P');
                p.textContent = html;
                contem.appendChild(p);
        } 
        else{
            console.log("2");
            for (let i = 0; i <= this.maior; i++) {
                if(this.maior % i == 0 && this.menor % i == 0 && i!=this.maior){
                    console.log(this.x);
                    html += this.x/i+"/"+this.y/i+" + ";   
                }
                if (this.x.toString().length == 1 && this.maior%this.menor!=0) {
                   console.log("entou");
                   let p = document.createElement('P');
                   p.textContent = "x = "+this.x+"/"+this.y; 
                   return contem.appendChild(p); 
                }
                if(i == this.maior){
                    console.log("eeeh");
                    let last = html.lastIndexOf('+');
                    html = html.slice(0,last-1);
                    let antes = html.slice(0,html.lastIndexOf('+')-1);
                    let depois = html.slice(html.lastIndexOf('+')+1, html.length);
                    let html2 = antes+" = "+depois;
                    let p = document.createElement('P');
                    let p1 = document.createElement('P');
                    
                    p.textContent = "x = "+html2;
                    contem.appendChild(p);
                }
            }
        }
    }
}
