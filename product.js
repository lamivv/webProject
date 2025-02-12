// product.js
// element.insertAdjacentHTML('beforebegin/afterbegin/beforeend/afterend','html') // html 값을 특정위치에 삽입
// *특정위치* -> beforebegin<div>afterbegin   ~내용~    beforeend</div>afterend
let productData = JSON.parse(localStorage.getItem('productData'));
// console.log(localStorage.getItem('productData'));

// 상품갯수만큼 반복생성
productData.forEach(function (product) {

  let str = `<div class="col-lg-3 col-md-4 col-sm-6 mix ${product.type} ${product.prodCode}">
                    <div class="product__item ${product.sale<=0?'':`sale`}" >
                        <div class="product__item__pic set-bg" style="background-image : url(${product.image})">
                        ${product.new==0 ?'':`<div class="label new">New</div>`}
                        ${product.sale<=0?'':`<div class="label sale">-${[product.sale]}% Sale</div>`}       
                        <ul class="product__hover">
                        <li><a href="product-details.html" class="image-popup" id=" ${product.prodCode}"><span
                                            class="arrow_expand"></span></a></li>
                                <li><a href="#"><span class="icon_heart_alt" id="${product.prodCode}"></span></a></li>
                                <li><a><span class="icon_bag_alt" id="${product.prodCode}"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="product-details.html">${product.prodName}</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            ${product.sale<=0?`<div class="product__price"> ${product.price}원</div>`:`<div class="product__price"> ${product.price*(100-product.sale)/100}원 <span> ${product.price}원</span></div>`}
                        </div>
                    </div>
                </div>`;
  let target = document.querySelector('div.property__gallery'); 
  target.insertAdjacentHTML('beforeend', str);
}); // end of forEach


// document.querySelectorAll('.filter__controls li').forEach(item => {
//     item.addEventListener('click', function(e){
//         // console.log(item.getAttribute('data-filter'))
//         let cat = item.getAttribute('data-filter');
//         document.querySelectorAll('.property__gallery>div').forEach(pitem => {
//             console.log('==>',  pitem.querySelector('div'))
//             pitem.querySelector('div').style.display = 'block';
//             console.log(pitem.classList.contains(cat), cat)
//             if(pitem.classList.contains(cat) || cat == "*") {
//                 // div.style.display = '';
//             } else {
//                 pitem.style.display = 'none';
//             }
//         })
//     })
   
// })