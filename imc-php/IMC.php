<?php
    $p = $_POST["peso"];
    $a = $_POST["altura"];

    if (empty($p) || empty($a)){
        echo "Informe os Dados.";
    } else {
        //echo "Resultado: ".$p." - ".$a;
        $imc = $p / ($a * $a);
        $imc = number_format($imc,2,'.',''); //formatando com 2 casas decimais
        echo "Seu IMC é: ".$imc ." -> ";
    }

    //classificação
    if ($imc <= 18.8){
        echo "Abaixo do Peso.";
    } else if($imc <= 25){
        echo "Peso Normal.";
    } else if($imc <= 30){
        echo "Acima do Peso.";
    } else{
        echo "Obesidade.";
    }

?>