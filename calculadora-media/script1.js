function calcularMedia() {
    var nomeAluno = document.getElementById("nomeAluno").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var media = (nota1 + nota2) / 2;
    alert("Nome do aluno: " + nomeAluno + "\n" +
          "Nota 1: " + nota1 + "\n" +
          "Nota 2: " + nota2 + "\n" +
          "Média: " + media.toFixed(2));
  }