<?php
$nome = $_POST["caixa1"];
echo "O nome é: ".$nome;

if (isset($_POST["numeros"])){
    echo "</br>"."Os semestres selecionados são: <br/>";
    foreach($_POST["numeros"] as $numero){
        echo "• ".$numero. "</br>"; //percorrendo o array dos semestres
    }
}else {
    echo "Semestre não selecionado!" ;
}

if (isset($_POST["livros"])){
    echo "</br>"."Livros de interesse: <br/>";
    foreach($_POST["livros"] as $livro){
        echo "• ".$livro. "</br>"; //percorrendo o array dos livros
    }
}else {
    echo "Nenhum livro selecionado!" ;
}

?>