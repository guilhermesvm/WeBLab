<?php

$dados = "";
$dados .= $_POST["cod"] . ", ";
$dados .= $_POST["nome"] . ", ";
$dados .= $_POST["valor"] . ", ";
$dados .= $_POST["tipo"] . ", ";
$dados .= PHP_EOL; //End Of Line - quebra de linha

$fp = fopen("./Produtos.txt","a+"); //fopen cria um arquivo (se não existir)
fwrite($fp,$dados); //fwrite grava os dados do arquivo
echo "Gravando dados...";

fclose($fp);
?>