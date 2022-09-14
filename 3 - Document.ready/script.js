var j = jQuery.noConflict();

// Executa a função somente após o dom ser carregado:
/* j(document).ready(()=>{

    function teste(){
        console.log(j('#exemplo'))
    }   
    teste()
})  */

// Método alternativo
/* j(function () {
    console.log(j('#exemplo'))
}) */

// Convencional:

j(document).ready(() => {
    console.log(j('#exemplo'))
})