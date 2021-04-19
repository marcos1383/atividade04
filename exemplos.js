//EXEMPLO-02
function mostrarOla() {
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerHTML = "Olá " + nome + ", Seja bem-vindo!" ;
    }
    var mostrar = document.getElementById("mostrar");
    mostrar.addEventListener("click", mostrarOla);
    
    //EXEMPLO-03
    function mostrarPromocao() {
    
        var inMedicamento = document.getElementById("inMedicamento");
        var inPreco = document.getElementById("inPreco");
        var outMedicamento = document.getElementById("outMedicamento");
        var outPromocao = document.getElementById("outPromocao");
      
        var medicamento = inMedicamento.value;
        var preco = Number(inPreco.value);
      
        var promocao = Math.floor(preco * 2);
      
        outMedicamento.textContent = "Promoção de " + medicamento;
        outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
      }
      var btMostrar = document.getElementById("btMostrar");
      btMostrar.addEventListener("click", mostrarPromocao);