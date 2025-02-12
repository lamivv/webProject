// product.js
// element.insertAdjacentHTML('beforebegin/afterbegin/beforeend/afterend','html') // html 값을 특정위치에 삽입
// *특정위치* -> beforebegin<div>afterbegin   ~내용~    beforeend</div>afterend
cartData = JSON.parse(localStorage.getItem('cartData'));
// console.log(cartData);
console.log(localStorage.getItem('cartData'));

let cartPriceTotal = 0;
// 상품갯수만큼 반복생성
cartData.forEach(function (cartData) {
  if(cartData!=null){
  let str =
    `<tr>
  <td class="cart__product__item">
    <img width="90px" height="90px" src="${cartData.image}" alt="">
    <div class="cart__product__item__title">
      <h6>${cartData.prodName}</h6>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
       </div>
    </div>
  </td>
  <td class="cart__price"> ${cartData.sale<=0? `${cartData.price}원` :`<span class="shop-cart-sale">${cartData.price}원</span><br>${cartData.price*(100-cartData.sale)/100}원` }</td>
  <td class="cart__quantity">
    <div class="pro-qty">
      <span class="dec qtybtn" id="${cartData.prodCode}">-</span>
      <input type="text" id="${cartData.prodCode}" value="${cartData.qyt}">
      <span class="inc qtybtn" id="${cartData.prodCode}">+</span>
    </div>
  </td>
  <td class="cart__total"> ${cartData.sale<=0? `${cartData.price*cartData.qyt}원` : `${(cartData.price*(100-cartData.sale)/100)*cartData.qyt}원`}</td>
  <td class="cart__close"><span class="icon_close" id="${cartData.prodCode}"></span></td>
  </tr>`;
  let target = document.querySelector('tbody');
  target.insertAdjacentHTML('afterbegin', str);
  cartPriceTotal += cartData.price;
}
}); // end of forEach

// 수량 감소 버튼
document.querySelectorAll("span.dec").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++ ){
      if(cartData[i]!=null && cartData[i].prodCode==item.id && cartData[i].qyt>1){
        cartData[i].qyt = cartData[i].qyt-1;
        // console.log(cartData[i].qyt);
      } 
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
    // 새로고침해야 적용됨...
  })
})

// 수량 증가 버튼
document.querySelectorAll("span.inc").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++ ){
      if(cartData[i]!=null && cartData[i].prodCode==item.id){
        cartData[i].qyt = cartData[i].qyt+1;
        // console.log(cartData[i].qyt);
      }
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
    // 새로고침해야 적용됨...
  })
})

// 삭제 버튼
document.querySelectorAll("span.icon_close").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++ ){
      if(cartData[i]!=null && cartData[i].prodCode==item.id){
        cartData[i] = null;
      }
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})

