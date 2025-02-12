let cartData = [];
cartData = JSON.parse(localStorage.getItem('cartData'));
console.log(cartData);
productData = [];
productData = JSON.parse(localStorage.getItem('productData'));

// 장바구니 추가
document.querySelectorAll("span.icon_bag_alt").forEach(item =>{
  // console.log(item);
  item.addEventListener('click',function(e){
    console.log(item.id); // 장바구니에 담은 상품의 상품코드
    // 담은 상품코드와 동일한 것을 productData에서 불러와서 담아주기
    productData.forEach(get =>{
      if(get.prodCode==item.id){
        
        let id = 'user01';
        let prodCode = get.prodCode;
        let prodName = get.prodName;
        let price = get.price;
        let likeIt = get.likeIt;
        let image = get.image;
        let sale = get.sale;
        let qyt = 1;
        cartData.push({id,prodCode, prodName, price, likeIt, image, sale, qyt});
        console.log(cartData);
        localStorage.setItem('cartData',JSON.stringify(cartData));
      }
      // if(get.prodCode== item.id){
      //   cartData.push({id:'user01',prodCode, prodName, price, likeIt, image, sale, qyt: 1});
      // }
    })
})
})