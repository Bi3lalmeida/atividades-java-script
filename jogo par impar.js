function parOuImpar (mao1, mao2) {
    let resultado = ""
    let soma = mao1 + mao2
    
    if(soma % 2 === 0){
    resultado = "número par ganhou";
        
    
    } else {
    resultado = "número ímpar ganhou";
    
    }

return resultado
}