$(document).ready(function(){
    
    $('#bb').click(function(){
        
       $('body').append('<div class="container"></div>')
        $('.container').append('<div class="row justify-content-md-center"></div>')
       

        for(var i = 0;i<64;i++)
        {
        $('.row').append('<div class="col-md-auto one"></div>');
        $('.one').css({'background-color': 'black', 'color' : 'white', 'width' : '130px', 'height' : '130px',
         'border' : ' red 5px inset' })
        }
    })
})


