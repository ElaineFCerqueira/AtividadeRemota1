// O peso deve ser maior que 100g
// O tamanho do nome deve ser maior que 2 caracteres
// A Quantidade de peças não pode ser maior que 10



let pesoPeca = 200
let nomePeca = "Polia"
let quantidadePeca = 15

if (quantidadePeca < 10) {
    console.log ("Quantidade de peça dentro do esperado. O produto do ser cadastrado")

    if (pesoPeca >= 100) {
        console.log ("Peso ok!, peça cadastrada com sucesso")

        if (nomePeca > 2) {
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