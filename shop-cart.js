// product.js
// element.insertAdjacentHTML('beforebegin/afterbegin/beforeend/afterend','html') // html 값을 특정위치에 삽입
// *특정위치* -> beforebegin<div>afterbegin   ~내용~    beforeend</div>afterend
cartData = JSON.parse(localStorage.getItem('cartData'));
// console.log(cartData);
console.log(localStorage.getItem('cartData'));


// 상품가격의 총 합
let cartPriceTotal = 0;
// 담은 상품의 종류 갯수 (상품의 수량은 계산하지 않음)
let cartItemQyt = 0;
// 상품갯수만큼 반복생성
cartData.forEach(function (cartData) {
  if(cartData!=null){
    // cartPriceTotal변수에 가격(할인 후 가격)*갯수를 더함
    cartPriceTotal += cartData.price*(100-cartData.sale)/100*cartData.qyt;
    cartItemQyt++;
    console.log(cartPriceTotal);
    console.log(cartItemQyt);
  let str =
    `<tr class="${cartData.prodCode}">
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
      <input type="text" class="${cartData.prodCode}" value="${cartData.qyt}">
      <span class="inc qtybtn" id="${cartData.prodCode}">+</span>
    </div>
  </td>
  <td class="cart__total ${cartData.prodCode}"> ${cartData.sale<=0? `${cartData.price*cartData.qyt}원` : `${(cartData.price*(100-cartData.sale)/100)*cartData.qyt}원`}</td>
  <td class="cart__close"><span class="icon_close" id="${cartData.prodCode}"></span></td>
  </tr>`;
  let target = document.querySelector('tbody');
  target.insertAdjacentHTML('afterbegin', str);
}
}); // end of forEach

// 수량 감소 버튼
document.querySelectorAll("span.dec").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++ ){
      if(cartData[i]!=null && cartData[i].prodCode==item.id && cartData[i].qyt>1){
        cartData[i].qyt = cartData[i].qyt-1;
        // 해당 상품의 화면 수량 반영
        document.querySelector('input.'+item.id).value = cartData[i].qyt;
        // 해당 상품의 화면 총 금액(금액*수량) 반영
        document.querySelector('td.'+item.id).innerHTML = (cartData[i].price*(100-cartData[i].sale)/100)*cartData[i].qyt+`원`;
        // console.log(document.querySelector('.'+item.id));
        console.log(cartData[i].qyt);
      } 
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})

// 수량 증가 버튼
document.querySelectorAll("span.inc").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++ ){
      if(cartData[i]!=null && cartData[i].prodCode==item.id){
        cartData[i].qyt = cartData[i].qyt+1;
        // 해당 상품의 화면 수량 반영
        document.querySelector('input.'+item.id).value = cartData[i].qyt;
        // 해당 상품의 화면 총 금액(금액*수량) 반영
        document.querySelector('td.'+item.id).innerHTML = (cartData[i].price*(100-cartData[i].sale)/100)*cartData[i].qyt+`원`;
        // console.log(document.querySelector('.'+item.id));
        console.log(cartData[i].qyt);
      }
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})

// 삭제 버튼
document.querySelectorAll("span.icon_close").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++ ){
      if(cartData[i]!=null && cartData[i].prodCode==item.id){
        cartData[i] = null;
        document.querySelector('tr.'+item.id).remove();
      }
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})

// 장바구니 결제내역
str = `
<li>상품금액 <span id ="amountOfGoods"> ${cartPriceTotal}원</span></li>
<li>배송비 <span id ="deliveryCharge"> ${cartPriceTotal>=30000? `무료배송` : `3000원`}</span></li>
<li>결제금액 <span id ="paymentAmount"> ${cartPriceTotal>=30000? `${cartPriceTotal}` : `${cartPriceTotal+3000}`}원</span></li>`;
let target = document.querySelector('div.cart__total__procced > ul');
target.insertAdjacentHTML('afterbegin', str);

// 장바구니 갯수 왜안돼~
// let inputCartItemQyt = `<div class="tip">${cartItemQyt}</div>`;
// let cartItemQytTarget = document.querySelectorAll('span.icon_bag_alt');
// cartItemQytTarget.insertAdjacentHTML('afterend', inputCartItemQyt);