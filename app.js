'use strict'

function soma (){
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('resultado')
    
    const resultadoSoma = 'O resultado da soma é: '+ (parseFloat(numero1) + parseFloat(numero2))

    resultado.textContent = resultadoSoma
}

document.getElementById('somar').addEventListener('click',soma)

function subtracao (){
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('resultado')

    const resultadoSubtracao = 'O resultado da subtração é: ' + (parseFloat(numero1) - parseFloat(numero2))
    resultado.textContent = resultadoSubtracao
}

document.getElementById('subtrair').addEventListener('click',subtracao)

function multiplicacao (){
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('resultado')

    const resultadoMultiplicacao = 'O resultado da multiplicação é: '+ (parseFloat(numero1) * parseFloat(numero2))
    resultado.textContent = resultadoMultiplicacao
}

document.getElementById('multiplicar').addEventListener('click',multiplicacao)

function divisao (){
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('resultado')

    const resultadoDivisao = 'O resultado da divisão é: '+ (parseFloat(numero1) / parseFloat(numero2))
    resultado.textContent = resultadoDivisao
}

document.getElementById('dividir').addEventListener('click',divisao)
