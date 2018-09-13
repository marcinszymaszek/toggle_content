$(document).ready(function () {
    
    $('.txt').eq(0).slideDown(600);
    
    $('.content h2').click(function () {
        
        $(this).next().slideToggle(400);
        
    });
    
});