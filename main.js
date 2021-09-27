function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolar = parseFloat(valor)
    var valorEmReal = valorEmDolar * 5.35

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O valor em Real é R$: " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido

    console.log(valorEmReal)
}