const VALOR_DO_DOLAR = 4.97;
function converterRealParaDolar(real) {
    return real / VALOR_DO_DOLAR;
}

// Resultado da conversão da cotação do Real para Dolar.
console.log( converterRealParaDolar(10) );


/*2. Implemente uma função capaz de calcular o IMC e retornar o diagnostico.

--------------- ------------------- ----------------- ---------------- ------------------
| IMC           | Entre 18.5 e 24.9 | Entre 25 e 29.9 | Acima de 30    | Maior que 40     |
|               |                   |                 |                |                  |
--------------- ------------------- ----------------- ---------------- ------------------
| Classificação | Normal            | Sobrepeso       | Obesidade      | Obesidade grave  |
--------------- ------------------- ----------------- ---------------- ------------------

Nota: A função deve retornar a classificação do IMC. Exemplo:

Usuário 1.70 de altura e 105kg retonaria classificação "Obesidade grave".

2.1. Formula IMC = Peso ÷ (Altura × Altura). 

2.2. Aplicação da Formula IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal)

*/
let alturaDoUsuario = 1.80;
let pesoDoUsuario = 150;

function retornarDiagnosticoDoIMCDoUsuario() {
     let formulaImc = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);
     
      if(formulaImc >= 18.5 && formulaImc < 25){
         return "normal";
     }
     else if(formulaImc >= 25 && formulaImc < 30 ){
        return "sobrepeso";
     }
     else if (formulaImc >= 30 && formulaImc <= 40 ){
        return "obesidade";
     }
     else if (formulaImc > 40){
        return "obesidade grave";
     }else{
        return "Você ta abaixo da tabela do IMC.";
     }
}

// Resultado esperado em sua solução.
console.log("Seu IMC é", retornarDiagnosticoDoIMCDoUsuario());

