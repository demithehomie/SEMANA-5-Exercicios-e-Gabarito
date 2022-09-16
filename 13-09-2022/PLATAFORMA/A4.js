/*

ATIVIDADE 4
Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)
o número de pessoas calmas; 
o número de mulheres nervosas; 
o número de homens agressivos; 
o número de outros calmos;
o número de pessoas nervosas com mais de 40 anos; 
o número de pessoas calmas com menos de 18 anos.


*/

var i = 0,
    pc = 0 ,
    mn = 0,
    ha = 0,
    oc = 0,
    nm40 = 0,
    cmenos18 = 0,
    idade = 0,
    humor = 0;

while(i< 151) {
    idade = Number(prompt('Qual a sua idade ?'))
    sexo = Number(prompt('Qual o seu sexo ?\n 1 - Masculino\n 2 - Feminino\n 3 - Outros'))
    humor = Number(prompt('Vc é ?\n 1 - Calmo\n 2- Nervoso\n 3 - Agressivo'))

    if (humor == 1 ){
        pc++
    } else if (sexo == 2 && humor == 2){
        mn++
    } else if (sexo == 1 && humor == 3){
        ha++
    } else if (sexo == 3 && humor == 1){
        oc++
        pc++
    } else if (idade > 40 && humor == 2){
        nm40++
    }else if (idade < 18 && humor == 1){
        cmenos18++
        pc++
    }
    
    i++
}

alert(
    `Resultado\n
    Pessoas calmas: ${pc}\n
    Mulheres nervosas: ${mn}\n
    Homens agressivos: ${ha}\n
    Outros calmos: ${oc}\n
    Nervosos com mais de 40 anos: ${nm40}\n
    Calmos com menos de 18: ${cmenos18}
    `
)