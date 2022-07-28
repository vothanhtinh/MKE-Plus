
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
            var isClose = (header.clientHeight)=== 87;
            console.log(header.clientHeight )
            if (isClose) {
                menu_bar.style.display = "block";
            
            }
            else {
              
                menu_bar.style.display = "none";
            }
        }

/////////////////////////////////////////////////////////
var product_list_1=document.querySelectorAll(".product-item-lists")[0]
var product_list_2=document.querySelectorAll(".product-item-lists")[1]
 


const app={
    
    products_1:[
        {
          image:"./assets/img/mk1.jpg",
          name:"KHĂN NANO CHỐNG BÁM HƠI NƯỚC",
          price_old:"",
          price_new:"10.000 ",
        },
        {
            image:"./assets/img/mk2.jpg",
            name:"ĐỆM MŨI SILICONE CHỐNG TỤT KÍNH",
            price_old:"",
            price_new:"10.000 ",
        },
        {
            image:"./assets/img/mk3.png",
            name:"KÍNH RÂM THỜI TRANG RB5114",
            price_old:"500.000 Đ",
            price_new:"350.000 ",
        },
          {
            image:"./assets/img/mk4.jpg",
            name:"GỌNG KÍNH CẬN UNISEX N240 L004 C2",
            price_old:"240.000 Đ",
            price_new:"168.000 ",
          }
      ],
      products_2:[
        {
          image:"./assets/img/sp1.png",
          name:"KÍNH RÂM THỜI TRANG REEMAN 2312 C1 GỌNG ĐEN MẮT KHÓI",
          price_old:"550.000 Đ",
          price_new:"385.000"
        },
        {
            image:"./assets/img/sp2.png",
            name:"KÍNH RÂM THỜI TRANG RM6199 C1 GỌNG ĐEN MẮT ĐEN",
            price_old:"650.000 Đ",
            price_new:"455.000 ",
        },
        {
            image:"./assets/img/sp3.jpg",
            name:"KÍNH RÂM THỜI TRANG REEMAN 19917 C4 GỌNG BẠC MẮT KHÓI",
            price_old:"500.000 Đ ",
            price_new:"350.000 ",
        },
          {
            image:"./assets/img/sp4.jpg",
            name:"KÍNH RÂM THỜI TRANG REEMAN 8909 GỌNG ĐEN MẮT ĐEN",
            price_old:"240.000 Đ ",
            price_new:"168.000 ",
          }
      ],

    render:function(){
        const content_1=this.products_1.map((product,index)=>{
            return `
            <div class="product" id="product" >
                    <div class="product-item-lists-img">
                        <img id="product-img"src=${product.image} alt="">
                    </div>
                    <div class="product-item-lists-title">
                        <a href="./pages/product-detail.html" >${product.name}</a>
                    </div> 
                    <div class="product-item-lists-price">
                        <div class="price-old">${product.price_old}
            
                        </div>
                        <div class="price-new">
                        <span class="price-number"> ${product.price_new}</span> 
                        <span class="currency-unit">Đ</span>
                        </div>
                    </div>
                </div>
            `
        })
        product_list_1.innerHTML=content_1.join('')
        const content_2=this.products_2.map((product,index)=>{
            return `
                <div class="product " id ="product">
                    <div class="product-item-lists-img">
                        <img id ="product-img" src=${product.image} alt="">
                        <div class="lable-sticker">SALE!</div>
                    </div>
                    <div class="product-item-lists-title">
                        <a href="./pages/product-detail.html">${product.name}</a>
                    </div>
                    <div class="product-item-lists-price">
                        <div class="price-old">
                         ${product.price_old}

                        </div>
                        <div class="price-new">
                        <span class="price-number"> ${product.price_new}</span> 
                       
                        <span class="currency-unit">Đ</span></div>
                    </div>
                    
                    
                </div>
            `
        })
        product_list_2.innerHTML=content_2.join('')
    },
    
    start: function(){
        
        this.render()
    }
}
app.start()

//
// function goto(img,name ,price_old,price_new){
//    sessionStorage.setItem("image",img)
//     sessionStorage.setItem("name",name)
//     sessionStorage.setItem("price-old",price_old)
//     sessionStorage.setItem("price-new",price_new)
// }
let bt=document.querySelectorAll("#product")

bt.forEach(function(item){  
    item.addEventListener("click",function(){
        let product_img=document.querySelector("#product-img")
        let product_title=this.querySelector(".product-item-lists-title >a")
        let product_price_old=this.querySelector(".price-old")
        let product_price_new=this.querySelector(".price-number")
        sessionStorage.setItem("image",product_img.src)
        sessionStorage.setItem("name",product_title.innerHTML)
        sessionStorage.setItem("price-old",product_price_old.innerHTML)
        sessionStorage.setItem("price-new",product_price_new.innerHTML)
        // goto(product_img.src,product_title.innerHTML,product_price_old.innerHTML,product_price_new.innerHTML)
       
       
    })
}
)





