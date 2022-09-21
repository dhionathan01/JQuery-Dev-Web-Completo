var j = jQuery.noConflict()
j(document).ready(() => {
    
    // selecionando um atributo de um determinado elemento html

    // exibindo no console:
    //1 -  o conteudo do atributo src dentro de uma tag img:
    console.log(j('img').attr('src'))

    // 2 - o conteudo do atributo border:
    console.log(j('img').attr('border'))

    // Modificando o valor de um atributo
    console.log(j('img').attr('border', '20'))
    
    // Mudando o endereço (src) da imagem consequentemente altera a imagem
    console.log(j('img').attr('src', 'esfera_2.png')) 

    // Selecionando uma div e o atributo style e jogando pra dentro de uma variável

    let div1 = j('div').attr('style')

    // exibindo o conteudo da variavel, logo o que está dentro do style
    console.log(div1)

    // Alterando o conteudo do style
    j('div').attr('style', 'background-color: blue; width: 200px; height: 200px;')
    // Modificando um value de input
    j('input').attr('value', 'jQuery Texto Modificado')
})