var j = jQuery.noConflict();
j(document).ready(() => {
    // Manipulando css inline com Jquery: Adicionando um background color:
    j("#topo").css('background-color', '#155661')

    // Adicionando um background , margin e padding ao atributo selecionado
    j("#topo").css('background-color', '#155661').css('margin', '0px').css('padding', '10px 20px 10px 20px')

    // Adicionando css como elemento literal:
    j("#topo").css({ 'background-color': '#f41' })
    j("#topo").css({ 'background-color': '#f41', 'padding': '30px' })
    
    // Exemplo com uma visualização melhor:
    j("#topo").css({
        'background-color' : '#f41',
        'padding': '30px',
        'color' : '#fff'
    })

    // Adicionando classes com jquery
    j('input').addClass('campo')
    j('input').addClass('padrao')
    j('textarea').addClass('campo')
    j('textarea').addClass('erro')

    // Removendo classe:
    j('textarea').removeClass('campo')

    // Verifica se um elemento possui uma determinada classe
    j('input').hasClass('campo')
})