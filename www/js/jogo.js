var questao = document.getElementById('questao');
var button = document.getElementById('b1');
var parag = document.getElementsByClassName('parag');

var pergunta = ["Uma viagem entre duas cidades foi feita de carro em 4 dias, a uma velocidade média de 75 quilômetros por hora, viajando-se 9 horas por dia. Se aumentarmos a velocidade média em 20% e viajarmos 5 horas por dia, em quantos dias iríamos de uma cidade à outra? ","Osmar pediu R$ 500,00 a seu irmão Vilmar, para devolver só depois de um ano. Vilmar penalizou-se pela situação de seu irmão, mas sabia que Osmar não aceitaria o empréstimo se ele não cobrasse juros. Assim sendo, combinaram que Vilmar emprestaria o dinheiro a juros simples de forma que o acréscimo na quantia inicial não fosse menor que R$ 30,00, nem maior que R$ 60,00. Nessas condições, a variação possível para a taxa de juros mensal é: "," O produto das soluções da equação ( x + 3)2 + ( x − 3)2 − 116 = 0 é igual a: "];
var resposta = [["a) 2 dias ","b) 7 dias ","c) 6 dias ","d) 9 dias ","e) 3 dias "],["a) Maior ou igual a 0,5%. ","b) Menor ou igual a 12%. ","c) De 6% a 12%.","d) De 0,005% à 0,01%. ","e) De 0,5% a 1%. "],["a) 49","b) − 49 ","c) 0 ","d) − 7 ","e) 7 "]];
var gabarito = ["c) 6 dias ","e) De 0,5% a 1%. ","b) − 49 "];
/*
var aux = 0;
var ctd = 0;
var pontos = 0;
p = document.getElementById('parag').innerHTML = "PONTOS: "+pontos;
for (var i = 1; i <= 5; i++) {
    document.getElementById('questao').innerHTML = pergunta[aux];
    button = document.getElementById('b'+i);
    button.textContent = resposta[aux][i-1];
}
function clicou() {
    console.log(event.target.textContent);
    console.log(gabarito[ctd]);
    if (event.target.textContent == gabarito[ctd]) {
        pontos++;
        aux++;
        document.getElementById('parag').innerHTML = "PONTOS: "+pontos;
        if (aux == pergunta.length) {
            return fim();
        }
        for (var i = 1; i <= 5; i++) {
            var button = document.getElementById('b'+i);
            button.textContent = resposta[aux][i-1];
            document.getElementById('questao').innerHTML = pergunta[aux];
        }   
        ctd++;
        console.log(aux);
        console.log(pergunta.length)
    }
    else{
        fim();
    }
}
        
function fim(){
    alert("FIM DE JOGO\n VOCE é BURROOO\nvoce fez "+pontos+" pontos");
}
*/