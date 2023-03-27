//MOSTRAR OS ANEXOS - JEITO AUTOMATICO COM POO

//OBJETO COM UMA KEY QUE EXECUTA UMA FUNÇÃO ESPECÍFICA
tabela = {
    um: function () { $('.info-1').fadeToggle() },
    dois: function () { $('.info-2').fadeToggle() },
    tres: function () { $('.info-3').fadeToggle() },
    quatro: function () { $('.info-4').fadeToggle() },
    cinco: function () { $('.info-5').fadeToggle() },
    seis: function () { $('.info-6').fadeToggle() },
    sete: function () { $('.info-7').fadeToggle() },
    oito: function () { $('.info-8').fadeToggle() },
    dez: function () { $('.info10').fadeToggle() },
    onze: function () { $('.info11').fadeToggle() },
    doze: function () { $('.info12').fadeToggle() },
    treze: function () { $('.info13').fadeToggle() },
    quatorze: function () { $('.info14').fadeToggle() },
    quinze: function () { $('.info15').fadeToggle() }
}

//FECHAR DIVS


//PEGA TODOS 'LINKS' DOS 'TÍTULOS' DO ANEXO
table = $('.table img')

//PERCORRE TODOS OS LINKS 
$(table).each(function () {
    //DEPOIS QUE O MOUSE PASSA EM CIMA DO TÍTULO
    $(this).click(() => {

        //CRIA UMA VARIAVEL COM O ATRIBUTO 'NAME' DO TÍTULO
        var x = $(this).attr('name')

        //CRIA UMA VARIAVEL COM O OBJETO TABELA EM QUE A 'KEY' É IGUAL AO 'NAME' DO TÍTULO E EXECUTA A FUNÇÃO EM ESPECÍFICO
        teste = tabela[x]
        teste()

    })
});

//ANEXO 9 - INFORMAÇÕES SOBRE A EDIFICAÇÃO - obs: esse tive que fazer fora do objeto pois ele não é um link
$('.botaoInfo').click((e) => {
    e.stopPropagation()
    $('.info-9').fadeToggle();
});

$('body').click(() => {
    $('.infoLei').fadeOut()
    $('.info').fadeOut()
    $('.outrasInfo').fadeOut()
    $('.info-9').fadeOut()
})

//PARA NAO FECHAR A JANELA QUANDO CLICAR NO 'i'

table.click((e) => {
    e.stopPropagation()
})
