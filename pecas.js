let quantidadePeca = 8 // A Quantidade de peças não pode ser maior que 10
let pesoPeca = 200 // O peso deve ser maior que 100g
let nomePeca = "Polia" // O tamanho do nome deve ser maior que 2 caracteres

if (quantidadePeca < 7) {
    console.log ("Quantidade de peça dentro do esperado. O produto do ser cadastrado")

    if (pesoPeca >= 100) {
        console.log ("Peso ok!, peça cadastrada com sucesso")

        if (nomePeca.length > 2) {
            console.log ("Nome ok!")

        } else {
            console.log ("nome com menos de 2 caracteres, peça não cadastrada")
        }

    } else {
        console.log ("Peso maior que 100, peça não cadastrada")
    }

} else {
    console.log ("Quantidade maior que 10, produto não pode ser cadastrado")
}