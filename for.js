function inverteparimpar(vetor) {
    let tamanhoVetor = vetor.length;
    let resposta = []
    
    for (let i = 0; i < tamanhoVetor; i++){
    let numeroPosicao = vetor[i];

    if (numeroPosicao % 2 == 0){
        console.log("o numero" + numeroPosicao + "par")
        let num = numeroPosicao + 1
        resposta.push(num)
    }else{
        console.log("o numero " + numeroPosicao + " é impar")
        let num = numeroPosicao * 2
        resposta.push(num)
      
      }
    
    }
     return resposta   
 }