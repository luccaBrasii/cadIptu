$(()=>{

//MOSTRAR OS ANEXOS - JEITO AUTOMATICO COM POO

//OBJETO COM UMA KEY QUE EXECUTA UMA FUNÇÃO ESPECÍFICA
tabela = {
    um:function(){$('.info-1').fadeIn()},
    dois:function(){$('.info-2').fadeIn()},
    tres:function(){$('.info-3').fadeIn()},
    quatro:function(){$('.info-4').fadeIn()},
    cinco:function(){$('.info-5').fadeIn()},
    seis:function(){$('.info-6').fadeIn()},
    sete:function(){$('.info-7').fadeIn()},
    oito:function(){$('.info-8').fadeIn()}
}


//PEGA TODOS 'LINKS' DOS 'TÍTULOS' DO ANEXO
table = $('.table a')

//PERCORRE TODOS OS LINKS 
$(table).each(function() {
    //DEPOIS QUE O MOUSE PASSA EM CIMA DO TÍTULO
    $(this).hover(()=>{
        
        //CRIA UMA VARIAVEL COM O ATRIBUTO 'NAME' DO TÍTULO
        var x = $(this).attr('name')
        console.log(x)

        //CRIA UMA VARIAVEL COM O OBJETO TABELA EM QUE A 'KEY' É IGUAL AO 'NAME' DO TÍTULO E EXECUTA A FUNÇÃO EM ESPECÍFICO
        teste = tabela[x]
        teste()
    },()=>{
        //OCULTA TODAS AS INFO DEPOIS DO MOUSE SAIR
        $('.info').fadeOut()})
  });
 


//ANEXO 9 - INFORMAÇÕES SOBRE A EDIFICAÇÃO - obs: esse tive que fazer fora do objeto pois ele não é um link
$('.botao-info9').hover(()=>{

    $('.info-9').fadeIn()
},()=>{
$('.info-9').fadeOut()})


//MOSTRAR OS ANEXOS - MANUALMENTE


/*
//ANEXO 1
$('.botao-info1').hover(()=>{

    $('.info-1').fadeIn()
},()=>{
$('.info-1').fadeOut()})


//ANEXO 2
$('.botao-info2').hover(()=>{

    $('.info-2').fadeIn()
},()=>{
$('.info-2').fadeOut()})

//ANEXO 3
$('.botao-info3').hover(()=>{

    $('.info-3').fadeIn()
},()=>{
$('.info-3').fadeOut()})

//ANEXO 4
$('.botao-info4').hover(()=>{

    $('.info-4').fadeIn()
},()=>{
$('.info-4').fadeOut()})

//ANEXO 5
$('.botao-info5').hover(()=>{

    $('.info-5').fadeIn()
},()=>{
$('.info-5').fadeOut()})

//ANEXO 6
$('.botao-info6').hover(()=>{

    $('.info-6').fadeIn()
},()=>{
$('.info-6').fadeOut()})

//ANEXO 7
$('.botao-info7').hover(()=>{

    $('.info-7').fadeIn()
},()=>{
$('.info-7').fadeOut()})

//ANEXO 8
$('.botao-info8').hover(()=>{

    $('.info-8').fadeIn()
},()=>{
$('.info-8').fadeOut()})


*/

})




