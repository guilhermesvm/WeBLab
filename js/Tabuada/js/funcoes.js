function tabuada(){
    var numero;
    var resultado = "";
    numero = document.getElementById("numero").value;
    if ( (numero < 0 ) || (numero > 10) ){
        resultado = "Valor fora do intervalo de [0 a 10]!";
    }
    else{
        resultado = "Resultado da Tabuada: <br>";
        for (i=1;i<11;i++){
         resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
        }
    }
   
    document.getElementById("tabuada_p").innerHTML = resultado;
}

function contaLetra(){
    var contador = 0;
    var letra = document.getElementById("letra").value;
    var palavra = document.getElementById("palavra").value;

    if((letra.length == 0) || (palavra.length == 0)){
     document.getElementById("tabuada_p").innerHTML = "Letra ou PALAVRA vazia. Favor preencher os dois campos";         
    }
    else{
        letra = letra.toUpperCase(letra);
        palavra = palavra.toUpperCase(palavra);// transf. para maiuscula
        for (i=0; i < palavra.length;i++){
            if(palavra.charAt(i) == letra){
                contador++;
            }// final do if
        }// final do For
       document.getElementById("tabuada_p").innerHTML = "A letra "+letra+" aparece -> "+contador+" Vezes na palavra " + palavra;

    }
}

