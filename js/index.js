$(function(){
    var header=$('.tm-m-h-content');
    var module=$('.module-con');
    var top=module.get(0).offsetTop;
    var more=$('.header-more');
    var nav=$('.nav');
    var tableC=$('.table-cov');
    window.onscroll=function(){
        var stop=document.body.scrollTop||document.documentElement.scrollTop;
        if(stop>top){
            header.addClass('header-active');
        }
        if(stop<top){
            header.removeClass('header-active');
        }
    }
    more.on('touchstart',function(){
       nav.addClass('active');
    })
    tableC.on('touchstart',function(){
        nav.removeClass('active');
    })
    $('.tab-nav ul').on('touchstart','li',function(){
        $('.tab-nav ul li').removeClass('aci')
        $(this).toggleClass('aci');
        
    })
})
