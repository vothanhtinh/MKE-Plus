
$(document).ready(function () {
$("#message").hide();

$(window).scroll(function () {
    if ($(this).scrollTop() >= 200)
        $("#message").show("slow");
    else
        $("#message").hide("slow");

})
})
var button_search=document.querySelector('.header-search');
var formSearch=document.querySelector('.header_search-hide');
var close_formSearch=document.querySelector('.close_tab-search');
var menuItems=document.querySelector('.menu-items');
function hide(){
    setTimeout(function(){
        menuItems.style.display="none";
        formSearch.style.display="block";
    },300);
    
};
function show(){
    setTimeout(function(){
        menuItems.style.display="block";
        formSearch.style.display="none";
    },300);
    
}

button_search.addEventListener('click',hide);
close_formSearch.addEventListener('click',show);
// Mobile Menu
var header = document.querySelector('.Header-menu-mobile');
 var menu = document.getElementById('mobile-bar');
var menu_bar=document.querySelector(".header-menu-mobile-bottom");

        menu.onclick = function () {
            console.log(header.clientHeight );
            var isClose = header.clientHeight === 87;
            if (isClose) {
                menu_bar.style.display = "block";
            }
            else {
                menu_bar.style.display = "none";
            }
        }


     

