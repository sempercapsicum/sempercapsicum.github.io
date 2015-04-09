$(document).ready(function() {
    $('.nav a').click(function(e){
        var $target = $( $(this).attr('href') );
        
        var $targetOffset = $target.offset().top;
        $('html,body')
        .animate({
            scrollTop: $targetOffset
        }, 500 );
            e.preventDefault();
    });

    $('a.back-to-top').click(function(e){
        
        $('html,body')
        .animate({
            scrollTop: 0
        }, 300, "easeInQuad");
         e.preventDefault();
});
});