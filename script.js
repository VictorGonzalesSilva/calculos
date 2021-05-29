function soma() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt( document.getElementById('numero2').value);
    var numero3 = parseInt( document.getElementById('numero3').value);
    document.getElementById('resultado').value = (numero1 + numero2 + numero3);
}
function multi() {
    var numero4 = parseInt(document.getElementById('numero4').value);
    var numero5 = parseInt( document.getElementById('numero5').value);
    var numero6 = parseInt( document.getElementById('numero6').value);
    document.getElementById('resultado2').value = (numero4 * numero5 * numero6);
}
function divid() {
    
    var numero7 = parseInt(document.getElementById('numero7').value);
    var numero8 = parseInt( document.getElementById('numero8').value);
    var numero9 = parseInt( document.getElementById('numero9').value);
    document.getElementById('resultado3').value = (numero7 / numero8 / numero9);
}

