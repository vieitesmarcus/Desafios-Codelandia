$(document).ready(function()
{
    var botao = $(".dropdown");
    var dropdown = $('.dropdown-content');
    
   
    botao.on('click', function(event){
        dropdown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
    $(window).resize(function(){
        var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(largura > 699){
            dropdown.show();
        }
      });
    

});
