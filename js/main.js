$('.btn_suv').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).siblings('.list_suv_wrap').slideToggle(300);
});
$('.top_left').click(function(){
    $('#gnb').animate({left : 0}, 300);
    $('.dark').css({"display" : "block"});
    console.log("메뉴창열림");
});
$('.dark').click(function(){
    $('#gnb').animate({left : -304}, 300, 'swing');
    $('.dark').css({"display" : "none"});
    $('.login_popup').hide();
});
$('.login_require').click(function(){
    $('.login_popup').show();
    $('#gnb').animate({left : -304}, 300, 'swing');

});
$('.btn_close').click(function(){
    $('.login_popup').hide();
    $('.dark').css({"display" : "none"});
});

