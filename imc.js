function calculaIMC(nome, altura, peso){ 

    let centi = (altura / 100)
    let IMC = (peso / (centi * centi))
    let aluno = {
                 nome: nome,
                 altura: altura,
                 peso: peso,
                 IMC: IMC
        
}
    return aluno
}