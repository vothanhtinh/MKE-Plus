$(document).ready(function () {
    $("#message").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200)
            $("#message").show("slow");
        else
            $("#message").hide("slow");

    })
})
var button_search = document.querySelector('.header-search');
// console.log(button_search)
var formSearch = document.querySelector('.header_search-hide');
var close_formSearch = document.querySelector('.close_tab-search');
var menuItems = document.querySelector('.menu-items');
function hide() {
    setTimeout(function () {
        menuItems.style.display = "none";
        formSearch.style.display = "block";
    }, 300);

};
function show() {
    setTimeout(function () {
        menuItems.style.display = "block";
        formSearch.style.display = "none";
    }, 300);

}

button_search.addEventListener('click', hide);
close_formSearch.addEventListener('click', show);
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


var tbody = document.querySelector("tbody")

var getSaveListproduct = localStorage.getItem("listProduct")
var listProduct = JSON.parse(getSaveListproduct)
const app = {
    list: listProduct,

    render: function () {
        const content = this.list.map((product, i) => {
            return `
                    <tr>
                        <div class="productItem">
                            <td class="information-product"><img src="${product.image}" alt="">
                                <p class="product-title">${product.title}</p>
                            </td>
                            <td> <span class="price">${product.price}</span> <span class="currency-unit"> Đ</span></td>
                            <td>
                                <div class="buttons_added">
                                    <input class="minus is-form" type="button" value="-">
                                    <input aria-label="quantity" class="input-qty" max="" min="1" type="number"
                                        value="${product.number}">
                                    <input class="plus is-form" type="button" value="+" ">
                                </div>
                            </td>
                            <td>
                                <span class="price-tmp">${product.price}</span> <span class="currency-unit"> Đ</span>
                            </td>
                            <td>
                                <div class="delete">x</div>
                            </td>
                        </div>
                    </tr>
            `
        })
        tbody.innerHTML = content.join('')
        changeItem()
        toTalPrice()
        removeProduct()
    },



    start: function () {
        this.render()
    }
}
app.start()


function changeItem() {
    var listCurrent = document.querySelectorAll(".productItem")
    for (let i = 0; i < listCurrent.length; i++) {
        let minus = document.querySelectorAll(".minus")[i]
        let plus = document.querySelectorAll(".plus")[i]
        minus.onclick = function () {
            let nb = document.querySelectorAll(".input-qty")[i].value
            if (nb > 2) {
                document.querySelectorAll(".input-qty")[i].value = parseInt(nb) - 1
                listProduct[i].number= parseInt(nb) - 1
                localStorage.setItem("listProduct",JSON.stringify(listProduct))
                app.render()
            } else {
                document.querySelectorAll(".input-qty")[i].value = 1
                listProduct[i].number=  1
                localStorage.setItem("listProduct",JSON.stringify(listProduct))
                app.render()
            }
            
        }
        plus.onclick = function () {
            var nb = document.querySelectorAll(".input-qty")[i].value
            document.querySelectorAll(".input-qty")[i].value = parseInt(nb) + 1
            listProduct[i].number= parseInt(nb) + 1
            localStorage.setItem("listProduct",JSON.stringify(listProduct))
            app.render()
        }
    }

}


function toTalPrice() {
    let tong = 0
    for (let i = 0; i < app.list.length; i++) {
        tong += Number(app.list[i].price).toFixed(3) * Number(app.list[i].number).toFixed(3)
    }
    const format = (tong * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let total = document.querySelector(".total-price")
    total.innerHTML = format + " Đ"
}


function removeProduct(){
    let buttonDelete=document.querySelectorAll(".delete")
    for(let i=0;i<buttonDelete.length;i++){
        buttonDelete[i].onclick = function(){
            if(i===0){
                listProduct.splice(0,1)
                localStorage.setItem("listProduct",JSON.stringify(listProduct))
            }
            else{
                listProduct.splice(i,1)
                localStorage.setItem("listProduct",JSON.stringify(listProduct))
            }
            app.render()
            
           
        }
    }
   
    
    // 
}






