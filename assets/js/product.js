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
    // console.log(button_search)
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
    // // Mobile Menu
    // var header = document.querySelector('.Header-menu-mobile');
    //  var menu = document.getElementById('mobile-bar');
    // var menu_bar=document.querySelector(".header-menu-mobile-bottom");
    
    //         menu.onclick = function () {
    //             var isClose = (header.clientHeight)=== 87;
    //             console.log(header.clientHeight )
    //             if (isClose) {
    //                 menu_bar.style.display = "block";
                
    //             }
    //             else {
                  
    //                 menu_bar.style.display = "none";
    //             }
    //         }
    var name_product = sessionStorage.getItem("name");
    var img = sessionStorage.getItem("image");
    var price_old = sessionStorage.getItem("price-old");
    var price_new = sessionStorage.getItem("price-new");
    console.log(name_product,img,price_new,price_old)

    
    var htmls_1='<div class="fushion-page-title"> <span class="text">Home</span><span class="icon"><i class="fa-solid fa-angle-right"></i></span></div><div class="fushion-page-title"><span class="text">K??nh Ch??nh H??ng, K??nh R??m</span> <span class="icon"><i class="fa-solid fa-angle-right"></i></span></div><div class="fushion-page-title"><span class="text">'+name_product+'</span></div>'
   var htmls_2='<img src="'+img+'" alt=""><div class="product-size"><div class="item-kinhrong"><div class="product-size-text"><h4>M???t K??nh R???ng:</h4><p>22mm</p></div></div><div class="item-caukinh"><div class="product-size-text"><h4>C???u K??nh:</h4><p>22mm</p></div></div><div class="item-chieudai"><div class="product-size-text"><h4>Chi???u d??i g???ng:</h4><p>147mm</p></div></div></div>'
    var htmls_3=' <div class="product-title"><h3>'+name_product+'</h3></div><div class="product-status"><p>T??nh Tr???ng: <b>C??n H??ng</b></p></div><div class="price-text"><p>Gi??:</p></div><div class="product-price"><div class="product-price-old"><del>'+price_old+' </del> </div><div class="product-price-new"><span class="price-number">'+price_new+'</span> <span class="currency-unit"> ??</span></div></div><div class="add-to-cart"><div class="buttons_added"><input class="minus is-form" type="button" value="-"><input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1"><input class="plus is-form" type="button" value="+"></div><div class="button-add"><button>TH??M V??O GI??? H??NG</button></div></div>'+
   '<div class="buy-now"><button>MUA NGAY</button></div><div class="buy-sub"><div class="freeship"><div class="icon-guide"><i class="fa-solid fa-truck"></i></div><div class="text"><h3>MI???N PH?? GIAO H??NG TO??N QU???C</h3> <p>V???i t???t c??? c??c ????n h??ng c?? gi?? tr??? tr??n 400,000??</p></div> </div><div class="chinhsach"><div class="icon-guide"><i class="fa-solid fa-spinner"></i></div><div class="text"><h3>CH??NH S??CH ?????I TR??? D??? D??NG</h3><p>?????i tr??? 7 ng??y v???i g???ng k??nh, b???o h??nh 1 n??m v??? thay ???c ve, n???n ch???nh g???ng</p></div></div><div class="tongdai"><div class="icon-guide"><i class="fa-solid fa-phone"></i></div><div class="text"> <h3>T???NG ????I H??? TR??? <b>0904.915.377</b> </h3><p>Ch??ng t??i lu??n s???n l??ng gi???i ????p m???i c??u h???i</p></div></div><div class="muahang"><div class="icon-guide"><i class="fa-solid fa-file-lines"></i></div><div class="text"><h3>H?????NG D???N MUA H??NG</h3></div></div></div>'
    var fushion_page=document.querySelector(".fushion-page");
    var product_text=document.querySelector(".product-text");
    var product_image=document.querySelector(".product-image");
    fushion_page.innerHTML=htmls_1

    product_image.innerHTML=htmls_2
    product_text.innerHTML=htmls_3
    
