$(function(){
    $(window).on('scroll', function(){
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.Header').addClass('on')
        } else {
            $('.Header').removeClass('on')
        }
    })
})