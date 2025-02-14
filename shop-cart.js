// product.js
// element.insertAdjacentHTML('beforebegin/afterbegin/beforeend/afterend','html') // html 값을 특정위치에 삽입
// *특정위치* -> beforebegin<div>afterbegin   ~내용~    beforeend</div>afterend
cartData = JSON.parse(localStorage.getItem('cartData'));
// console.log(cartData);
// console.log(localStorage.getItem('cartData'));

// 상품가격의 총 합
let cartPriceTotal = 0;
// 상품갯수만큼 반복생성
cartData.forEach(function (cartData) {
  if (cartData != null && cartData.id==loginData[0].id) {
    // cartPriceTotal변수에 가격(할인 후 가격)*갯수를 더함
    cartPriceTotal += cartData.price * (100 - cartData.sale) / 100 * cartData.qyt;
    // console.log(cartPriceTotal);
    // console.log(cartItemQyt);
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
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i] != null && cartData[i].prodCode == item.id && cartData[i].qyt > 1) {
        cartData[i].qyt = cartData[i].qyt - 1;
        // 해당 상품의 화면 수량 반영
        document.querySelector('input.' + item.id).value = cartData[i].qyt;
        // 해당 상품의 화면 총 금액(금액*수량) 반영
        document.querySelector('td.' + item.id).innerHTML = (cartData[i].price * (100 - cartData[i].sale) / 100) * cartData[i].qyt + `원`;

        // 장바구니 결제내역 반영
        // 상품금액
        cartPriceTotal = cartPriceTotal - (cartData[i].price * (100 - cartData[i].sale) / 100);
        document.querySelector('#amountOfGoods').innerHTML = cartPriceTotal;
        // 배송비
        document.querySelector('#deliveryCharge').innerHTML = cartPriceTotal >= 30000 ? `무료배송` : `3000원`;
        // 결제금액
        document.querySelector('#paymentAmount').innerHTML = cartPriceTotal >= 30000 ? cartPriceTotal : cartPriceTotal + 3000;
      }
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})

// 수량 증가 버튼
document.querySelectorAll("span.inc").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i] != null && cartData[i].prodCode == item.id) {
        cartData[i].qyt = cartData[i].qyt + 1;
        // 해당 상품의 화면 수량 반영
        document.querySelector('input.' + item.id).value = cartData[i].qyt;
        // 해당 상품의 화면 총 금액(금액*수량) 반영
        document.querySelector('td.' + item.id).innerHTML = (cartData[i].price * (100 - cartData[i].sale) / 100) * cartData[i].qyt + `원`;

        // 장바구니 결제내역 반영
        // 상품금액
        cartPriceTotal = cartPriceTotal + (cartData[i].price * (100 - cartData[i].sale) / 100);
        document.querySelector('#amountOfGoods').innerHTML = cartPriceTotal;
        // 배송비
        document.querySelector('#deliveryCharge').innerHTML = cartPriceTotal >= 30000 ? `무료배송` : `3000원`;
        // 결제금액
        document.querySelector('#paymentAmount').innerHTML = cartPriceTotal >= 30000 ? cartPriceTotal : cartPriceTotal + 3000;
      }
    }
    // cartData에 반영
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})

// 장바구니에 담겨져 있는 상품종류의 갯수 (배열중 삭제된 null값은 제외)
let cartnum = 0;
for (let i = 0; i < cartData.length; i++) {
  if (cartData[i] != null && cartData[i].id==loginData[0].id) {
    cartnum++;
  }
}

// 삭제 버튼
document.querySelectorAll("span.icon_close").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 버튼에 적용된 id값
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i] != null && cartData[i].prodCode == item.id) {
        // 장바구니 결제내역 반영
        // 상품금액
        cartPriceTotal = cartPriceTotal - (cartData[i].price * (100 - cartData[i].sale) / 100 * cartData[i].qyt);
        document.querySelector('#amountOfGoods').innerHTML = cartPriceTotal;
        // 배송비
        document.querySelector('#deliveryCharge').innerHTML = cartPriceTotal >= 30000 ? `무료배송` : cartPriceTotal == 0 ? `0원` : `3000원`;
        // 결제금액
        document.querySelector('#paymentAmount').innerHTML = cartPriceTotal >= 30000 ? cartPriceTotal : cartPriceTotal == 0 ? 0 : cartPriceTotal + 3000;

        // 장바구니 갯수 감소
        cartnum--;
        let tip_Bag_Length = document.querySelectorAll('.tip_bag');
        // console.log(tip_Bag_Length);
        for (let i = 0; i < tip_Bag_Length.length; i++) {
          if(cartnum != 0){
            tip_Bag_Length[i].innerHTML = cartnum;
            } else {
              tip_Bag_Length[i].remove();
            }
        }
        // document.querySelector('.tip_bag').innerHTML = cartnum;
        // 장바구니 데이터에서 삭제
        cartData[i] = null;
        // 장바구니 화면에서 삭제
        document.querySelector('tr.' + item.id).remove();
      }
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})

// 장바구니 버튼의 뱃지에 담겨져 있는 상품의 갯수 표시
let tip_Bag_Length = document.querySelectorAll('.tip_bag');
for (let i = 0; i < tip_Bag_Length.length; i++) {
  if(cartnum != 0){
  tip_Bag_Length[i].innerHTML = cartnum; // 0개가 아니면 변경
  } else {
    tip_Bag_Length[i].remove(); // 0개면 지우고ㅠ
  }
}

// 장바구니 결제내역
str = `
<li>상품금액 <span>원</span><span id ="amountOfGoods"> ${cartPriceTotal}</span></li>
<li>배송비 <span id ="deliveryCharge"> ${cartPriceTotal>=30000? `무료배송` : cartPriceTotal == 0 ? `0원` : `3000원`}</span></li>
<li><p>기본 배송비 3,000원 | 3만원 이상 무료배송</p></li><hr>
<li>결제금액 <span>원</span><span id ="paymentAmount"> ${cartPriceTotal>=30000? `${cartPriceTotal}` : cartPriceTotal == 0 ? `0` :`${cartPriceTotal+3000}`}</span></li>`;
let target = document.querySelector('div.cart__total__procced > ul');
target.insertAdjacentHTML('afterbegin', str);