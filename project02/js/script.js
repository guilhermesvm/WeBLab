function tabuada(){
    var numero;
    var resultado = "";
    numero = document.getElementById("numero").value;

    if ((numero<0) || (numero>10)){
        resultado = "Valor fora do intervalo de 0 a 10!";
    }
    else{
        resultado = "Resultado da Tabuada: <br>";
        for (i=1; i<11;i++){
            resultado += numero + " x " + i + " = " + (numero * i) + "<br>"}
    }
    document.getElementById("tabuada_p").innerHTML = resultado;
}
function contaLetra(){
    var contador = 0;
    var letra = document.getElementById("letra").value;
    var palavra = document.getElementById("palavra").value;

    if ((letra.length == 0) || (palavra.length == 0)){
        document.getElementById("tabuada_p").innerHTML = "Letra ou Palavra não inseridas."
    }
    else{
        letra = letra.toUpperCase(letra); //trans. p maiúsculo
        palavra = palavra.toUpperCase(palavra);
        for (i=0; i < palavra.length;i++){
            if(palavra.charAt(i) == letra){
                contador++;
            }//final if
        }//final for
    document.getElementById("tabuada_p").innerHTML ="A letra "+letra+" aparece ->"+contador+" vezes na palavra " + palavra+".";
    }
}