var j = jQuery.noConflict()

j(document).ready(() => {
    console.log('conteudo div1: ' + j('#div1').html()); 

    console.log('conteudo div2: ' + j('#div2').html()); 

    console.log("Substituindo valores interno da tag html div1: ",
        j('#div1').html('<strong>Novo conteudo </strong>'));
    
    console.log('conteudo div1: ' + j('#div1').html());
    
    console.log('Passando texto Puro para div2: ',
        j('#div2').text('<a  href=""> texto teste  </a>'))
    console.log('Passando como conteudo interno div2: ',
        j('#div2').html('<a href=""> agora usando a tag html vira link  </a>'))

        
        
        
    
})

