let cartData = [];
cartData = JSON.parse(localStorage.getItem('cartData'));
// console.log(cartData);
productData = [];
productData = JSON.parse(localStorage.getItem('productData'));

// // 현재 로그인명단
// let loginData = [];
// loginData = JSON.parse(localStorage.getItem('loginData'));

// 장바구니 추가
document.querySelectorAll("span.icon_bag_alt").forEach(item => {
  item.addEventListener('click', function (e) {
    console.log(item.id); // 장바구니에 담으려는 상품의 상품코드
    // 담은 상품코드와 동일한 것을 productData에서 불러와서 담아주기
    productData.forEach(get => {
      let Exist = 1; // 장바구니에 동일한 상품이 이미 있다면 0, 없다면 1
      if (get.prodCode == item.id ) { // 장바구니에 담으려는 상품의 코드와 제품의 코드가 동일하면
        for (let i = 0; i < cartData.length; i++) { // 이미 장바구니에 있는지 확인을 위해서 루프를 하고
          if (cartData[i]!= null && cartData[i].prodCode == item.id && cartData[i].id==loginData[0].id) { // 이미 장바구니에 있는 상품이라면
            cartData[i].qyt = cartData[i].qyt +1 ;
            alert('\n이미 장바구니에 추가된 상품입니다. \n\n수량이 추가되었습니다');
            Exist = 0 ; // 존재여부를 반환
            return; // 계속반복하면 다음 반복문에서 Exist가 0이 될 수 있기 때문에 for반복문을 종료한다
          }
        } // end of for
        if (Exist == 1){
          let id = loginData[0].id;
          let prodCode = get.prodCode;
          let prodName = get.prodName;
          let price = get.price;
          let likeIt = get.likeIt;
          let image = get.image;
          let sale = get.sale;
          let qyt = 1;
          alert('\n장바구니에 추가되었습니다');
          cartData.push({id, prodCode, prodName, price, likeIt,  image, sale, qyt});
          console.log(cartData);
        }
        // 장바구니 갯수 조정 시작
        cartnum++;
        let tip_Bag_Length = document.querySelectorAll('.tip_bag');
        // console.log(tip_Bag_Length);
        for (let i = 0; i < tip_Bag_Length.length; i++) {
          if (cartnum != 0) {
            tip_Bag_Length[i].innerHTML = cartnum;
          } else {
            tip_Bag_Length[i].remove();
          }
        }
        // 장바구니 갯수 조정 끝
      }
    })
    localStorage.setItem('cartData', JSON.stringify(cartData));
  })
})
// 장바구니에 담겨져 있는 상품종류의 갯수 (배열중 삭제된 null값은 제외)
let cartnum = 0;
for (let i = 0; i < cartData.length; i++) {
  if (cartData[i] != null && cartData[i].id==loginData[0].id)  {
    cartnum++;
  }
}
// 장바구니 버튼의 뱃지에 담겨져 있는 상품의 갯수 표시
let tip_Bag_Length = document.querySelectorAll('.tip_bag');
for (let i = 0; i < tip_Bag_Length.length; i++) {
  if (cartnum != 0) {
    tip_Bag_Length[i].innerHTML = cartnum;
  } else {
    tip_Bag_Length[i].remove();
  }
}