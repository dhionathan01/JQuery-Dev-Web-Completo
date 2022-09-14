var j = jQuery.noConflict();

// Executa a fun��o somente ap�s o dom ser carregado:
/* j(document).ready(()=>{

    function teste(){
        console.log(j('#exemplo'))
    }   
    teste()
})  */

// M�todo alternativo
/* j(function () {
    console.log(j('#exemplo'))
}) */

// Convencional:

j(document).ready(() => {
    console.log(j('#exemplo'))
})