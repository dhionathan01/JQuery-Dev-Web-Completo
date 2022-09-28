var j = jQuery.noConflict()
j(document).ready(() => {
    // Para fazer a inserção de tags html podemos utilizar o "prepend", "append".
    // prepend colocar tags antes do primeiro elemento contido append coloca tags dps do último elemento contido 

    // TODOS OS ELEMENTOS SÃO ADICIONADOS DENTRO DA TAG QUANDO UTILIZADO O APPEND OU PREPEND
    // Adicionando mais um elemento dentro do elemento selecionado na última possição:
    j('#lista1').append('<li>item 4</li>');  
    // Adicionando na primeira possição:
    j('#lista1').prepend('<li>item 5</>');

    // TODOS OS ELEMENTOS SÃO ADICIONADOS FORA DA TAG QUANDO UTILIZADO O AFTER OU BEFORE
    // Adicionando elemento após a tag selecionada
    j('#lista2').after("Inserindo após a tag selecionada");
    j('#lista2').before("<p>Inserindo antes da tag selecionada</p>");

    // TAG html substitui todo o conteudo contido
    j('#lista2Copia').html("<p>O conteudo foi substituido</p>")
    j('#lista1Copia').remove()


})