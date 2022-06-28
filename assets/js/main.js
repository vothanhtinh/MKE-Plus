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

