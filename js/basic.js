console.log('Olá html')

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true
var userName = 'Fernando'

document.getElementById('user-name').innerHTML = userName

//Variáveis//


//Operadores matemáticos

var n1 = 7

var n2 = 2.5

var total = n1 / n2
/*
console.log(total)

console.log(typeof n1)
console.log(typeof n2)

//document.getElementById('total').innerHTML = total

var resultado = n1 != v2
console.log(resultado)

function soma(n1, n2){
    console.log(n1 + n2)
}

soma(95, 5)

function boasVindas(nome) {
    alert(nome +', seja bem-vindo')
}

boasVindas('Erick')

function soma(n1, n2){
    return n1 + n2
}
var resultado = soma (5, 5)
console.log(resultado/2)
*/

//Controle de fluxos//

//Sendo um cliente correntista do banco
//Posso sacar dinheiro em caixas eletrônicos
//Para poder comprar em lugares que não aceitem o cartão de débito ou crédito

// var saldo = 1000

// function saque(valor) {
//     saldo = saldo - valor 
// }

// saque(500)
// console.log(saldo)

//Cenário 1:Saque com sucesso
//Dado que meu saldo é de 1000 reais
//Quando faço um saque de 500 reais
//Então o valor do saque deve ser deduzido do meu saldo

// var saldo = 1000
// var vlrLimiteSaque = 700

// function saque(valor) {

//     if(valor > vlrLimiteSaque){
//         console.log('Limite do saque excedido valor máximo para saque é de '+vlrLimiteSaque)
//     }
// }

// saque(701)
// console.log(saque)

// //Cenário 2: Saque com valor superior ao saldo
// //Dado que meu saldo é de 1000 reais
// //Quando eu faço um saque de 1001 reais
// //Então Não dee deduzir do meu saldo
// //E deve mostrar uma mensagem de alerta inofmrnado que o valor é superior ao saldo

// var saldo = 1000
// var vlrLimiteSaque = 700

// function saque(valor) {

//     if(valor > vlrLimiteSaque){
//         console.log('Limite do saque excedido valor máximo para saque é de '+vlrLimiteSaque)
//     }
//     if(valor >= saldo ){
//         if( valor <= vlrLimiteSaque){
//         console.log('O valor '+valor+' do saque e maior que saldo '+saldo+' disponível')
//         }
//     }if(valor < vlrLimiteSaque)
//         if(saldo >= valor)
//         saldo = saldo - valor
//         console.log('Saque realizado com sucesso, saldo remanescente '+saldo)
// }

// saque(701)
// console.log(saque)

//Cenário 3: Saque com valor máximo
//Dado que meu saldo é de 1000 reais
//E o valor máximo por operação é de 700
//Quando faço um saque no valor de 701 reais
//Então deve mostrar uma mensagem de alerta informando que o valor e supior ao máximo permitido por operação


//Arrays//

var gaveteiro = ['Meias','Gravatas','Documentos','Salgadinhos']

// function Print(){
// for (var i=0; i<=length.gaveteiro[i]; i++){

//     console.log(gaveteiro[i])

//  }
// }

// Print()

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Han Solo', 'Dath Vader','Chewbacca','R2D2']


// personagens.push('C3p0')

// personagens.pop() //remove o último da lista

// personagens = personagens.filter(function(p){
//     return p !== 'Dath Vader'

// })
// console.log(personagens)

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
    
// })

// console.log(personagens)


//Controle de repetição//

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Han Solo', 'Dath Vader','Chewbacca','R2D2']

// console.log(personagens[0])

// personagens.forEach(function(p){
//     console.log(p)
// })
// for (var i in personagens){

//     console.log(personagens[i])
// } 



// for (var i = 0; i <= length.personagens[i]; i++){

//     console.log(personagens[i])

//  }

 // Objetos //

//  var yoda = {
//     nome:'Mestre Yoda',
//     idade:100,
//     jedi:true,
//     mostra_idade: function() {
//         console.log(`A idade do ${this.nome} é de ${this.idade} anos`)
//     }

//  }

//  yoda.nome = 'Mestre Yoda'
//  yoda.idade = 100
//  yoda.jedi = true
//  yoda.outro_campo = 'alguma coisa'

//  console.log(yoda)
// yoda.mostra_idade()

//Tentando alterar uma constante//
// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)

//Tentando alterar uma variável//
// var nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)
