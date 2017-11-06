const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    valorx = parseInt(document.getElementById('x').value);
    valory = parseInt(document.getElementById('y').value);
    console.log("oii");
    razao(valorx,valory);
    e.preventDefault();
});

function razao(valorx,valory) {
    console.log("oii");
    let html="";
    this.x = valorx;
    this.y = valory;
    let maior = Math.max(this.x,this.y); 
    let menor = Math.min(this.x,this.y); 
    if (maior%menor == 0) {
        if(this.x>this.y){
            html += this.x+"/"+this.y+" = "+maior/menor+"/"+menor/menor;
        }
        else{
            html += this.x+"/"+this.y+" = "+menor/menor+"/"+maior/menor;
        }
            let p = document.createElement('P');
            p.textContent = html;
            contem.appendChild(p);
    } 
    else{
        for (let i = 0; i <= maior; i++) {
            if(maior % i == 0 && menor % i == 0 && i!=maior){
                html += this.x/i+"/"+this.y/i+" + ";   
            }
            if(i == maior){
                let last = html.lastIndexOf('+');
                html = html.slice(0,last-1);
                let antes = html.slice(0,html.lastIndexOf('+')-1);
                let depois = html.slice(html.lastIndexOf('+')+1, html.length);
                let html2 = antes+" = "+depois;
                let p = document.createElement('P');
                p.textContent = html2;
                contem.appendChild(p);
                p = "";
            }
        }
    }
}