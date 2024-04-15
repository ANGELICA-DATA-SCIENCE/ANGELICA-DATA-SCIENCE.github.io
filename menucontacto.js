$('a.toggle-submenu,.new-submenu .Menu').on('mouseenter',function(){
    $('.new-submenu').fadeIn();
});
$('a.toggle-submenu,.new-submenu .Menu').on('mouseleave',function () {
    setTimeout(function(){
        if($('a.toggle-submenu:hover,.new-submenu .Menu:hover').length <= 0){
            $('.new-submenu').fadeOut();
        }
    },500);
});