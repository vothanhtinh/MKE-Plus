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
    // Mobile Menu
    var header = document.querySelector('.Header-menu-mobile');
     var menu = document.getElementById('mobile-bar');
    var menu_bar=document.querySelector(".header-menu-mobile-bottom");
    
            menu.onclick = function () {
                var isClose = (header.clientHeight)=== 87;
                console.log(header.clientHeight )
                if (isClose) {
                    menu_bar.style.display = "block";
                
                }
                else {
                  
                    menu_bar.style.display = "none";
                }
            }
    var name_product = sessionStorage.getItem("name");
    var img = sessionStorage.getItem("image");
    var price_old = sessionStorage.getItem("price-old");
    var price_new = sessionStorage.getItem("price-new");
    // console.log(name_product,img,price_new,price_old)

    
    var htmls_1='<div class="fushion-page-title"> <span class="text">Home</span><span class="icon"><i class="fa-solid fa-angle-right"></i></span></div><div class="fushion-page-title"><span class="text">Kính Chính Hãng, Kính Râm</span> <span class="icon"><i class="fa-solid fa-angle-right"></i></span></div><div class="fushion-page-title"><span class="text">'+name_product+'</span></div>'
   var htmls_2='<img src="'+img+'" alt=""><div class="product-size"><div class="item-kinhrong"><div class="product-size-text"><h4>Mắt Kính Rộng:</h4><p>22mm</p></div></div><div class="item-caukinh"><div class="product-size-text"><h4>Cầu Kính:</h4><p>22mm</p></div></div><div class="item-chieudai"><div class="product-size-text"><h4>Chiều dài gọng:</h4><p>147mm</p></div></div></div>'
    var htmls_3=' <div class="product-title"><h3>'+name_product+'</h3></div><div class="product-status"><p>Tình Trạng: <b>Còn Hàng</b></p></div><div class="price-text"><p>Giá:</p></div><div class="product-price"><div class="product-price-old"><del>'+price_old+' </del> </div><div class="product-price-new"><span class="price-number">'+price_new+'</span> <span class="currency-unit"> Đ</span></div></div><div class="add-to-cart"><div class="buttons_added"><input class="minus is-form" type="button" onclick="tru()" value="-"><input aria-label="quantity" class="input-qty" max="" min="1"  type="number" value="1"><input class="plus is-form" type="button" onclick="cong()" value="+"></div><div class="button-add"><a href="./cart.html"><button>THÊM VÀO GIỎ HÀNG</button><a></div></div>'+
   '<div class="buy-now"><button>MUA NGAY</button></div><div class="buy-sub"><div class="freeship"><div class="icon-guide"><i class="fa-solid fa-truck"></i></div><div class="text"><h3>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h3> <p>Với tất cả các đơn hàng có giá trị trên 400,000đ</p></div> </div><div class="chinhsach"><div class="icon-guide"><i class="fa-solid fa-spinner"></i></div><div class="text"><h3>CHÍNH SÁCH ĐỔI TRẢ DỄ DÀNG</h3><p>Đổi trả 7 ngày với gọng kính, bảo hành 1 năm về thay ốc ve, nắn chỉnh gọng</p></div></div><div class="tongdai"><div class="icon-guide"><i class="fa-solid fa-phone"></i></div><div class="text"> <h3>TỔNG ĐÀI HỖ TRỢ <b>0904.915.377</b> </h3><p>Chúng tôi luôn sẵn lòng giải đáp mọi câu hỏi</p></div></div><div class="muahang"><div class="icon-guide"><i class="fa-solid fa-file-lines"></i></div><div class="text"><h3>HƯỚNG DẪN MUA HÀNG</h3></div></div></div>'
    var fushion_page=document.querySelector(".fushion-page");
    var product_text=document.querySelector(".product-text");
    var product_image=document.querySelector(".product-image");
    fushion_page.innerHTML=htmls_1

    product_image.innerHTML=htmls_2
    product_text.innerHTML=htmls_3

    // Tăng giảm số lượng
    function cong()
    {
        var nb=document.querySelector(".input-qty").value
        document.querySelector(".input-qty").value=parseInt(nb)+1
        
    }
    function tru(){
        var nb=document.querySelector(".input-qty").value
        if(nb>2){
            document.querySelector(".input-qty").value=parseInt(nb)-1
        }else{
            document.querySelector(".input-qty").value=1
        }
       
    }
    
    var button_add=document.querySelector(".button-add")
    var lenght=0

    
    button_add.addEventListener("click",function(e){
        let product_img=document.querySelector(".product-image >img")
        let product_title=document.querySelector(".product-title>h3")
        let valueOder=document.querySelector(".input-qty")
        let product_price_new=document.querySelector(".price-number")
        var getLocalStorage=localStorage.getItem("listProduct")
        var arrayProduct=JSON.parse(getLocalStorage)
        if(arrayProduct){
            arrayProduct.push({
                "image": product_img.src,
                "title": product_title.innerHTML,
                "number": valueOder.value,
                "price": product_price_new.innerHTML,
            })
        }
        else{
            arrayProduct=[]
            arrayProduct.push(
                {
                "image": product_img.src,
                "title": product_title.innerHTML,
                "number": valueOder.value,
                "price": product_price_new.innerHTML,
                }
                )
        }
        localStorage.setItem("listProduct",JSON.stringify(arrayProduct))


        // localStorage.setItem("image",product_img.src)
        // localStorage.setItem("name",product_title.innerHTML)
        // localStorage.setItem("number",valueOder)
        // localStorage.setItem("price-new",product_price_new.innerHTML)
    })

    

