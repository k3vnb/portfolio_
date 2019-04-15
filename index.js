

function contactLinkHover(){
    console.log('yo');
    $('.contact-link-container img').hover(function(){
        $(this).parents('.contact-link-container').css('background-color', '#ff000078');
    }, function(){
        $(this).parents('.contact-link-container').css('background-color', 'transparent');
    })
}




$(
    contactLinkHover()
 )

