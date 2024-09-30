var leonardo = document.getElementById('leonardo');
var samanta = document.getElementById('samanta');
var bruna = document.getElementById('bruna');

var setaDireita = document.getElementById('setadireita');
var setaEsquerda = document.getElementById('setaesquerda');

function rolarParaDireita() {

    leonardo.style.display = 'none';
    bruna.style.display = 'flex'; 
    setaDireita.style.display = 'none';
    setaEsquerda.style.display = 'flex';
    
    }

function rolarParaEsquerda() {
    leonardo.style.display = 'flex';
    bruna.style.display = "none";
    setaDireita.style.display = "flex";
    setaEsquerda.style.display = "none"
}