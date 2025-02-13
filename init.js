// init.js
// 상품정보와 장바구니정보, 회원정보의 변수 초기값 지정

const productData = [
  {prodCode: 'P001', prodName: 'Buttons tweed blazer', type : 'women', price: 35000, likeIt: 5, image:'img/product/product-1.jpg', sale: 0, new: 1},
  {prodCode: 'P002', prodName: 'Flowy striped skirt', type : 'men', price: 40000, likeIt: 5, image:'img/product/product-2.jpg', sale: 15, new: 0},
  {prodCode: 'P003', prodName: 'Cotton T-Shirt', type : 'women', price: 30000, likeIt: 5, image:'img/product/product-3.jpg', sale: 0, new: 0},
  {prodCode: 'P004', prodName: 'Slim striped pocket shirt', type : 'men', price: 25000, likeIt: 5, image:'img/product/product-4.jpg', sale: 0, new: 0},
  {prodCode: 'P005', prodName: 'Fit micro corduroy shirt', type : 'men', price: 30000, likeIt: 5, image:'img/product/product-5.jpg', sale: 20, new: 0},
  {prodCode: 'P006', prodName: 'Tropical Kimono', type : 'women', price: 22000, likeIt: 5, image:'img/product/product-6.jpg', sale: 5, new: 0},
  {prodCode: 'P007', prodName: 'Contrasting sunglasses', type : 'women', price: 45000, likeIt: 5, image:'img/product/product-7.jpg', sale: 0, new: 1},
  {prodCode: 'P008', prodName: 'Water resistant backpack', type : 'men', price: 36000, likeIt: 5, image:'img/product/product-8.jpg', sale: 0, new: 0}
]
const memberData = [ 
  {name: '비회원', id: 'user00', pw: '0000', responsibility: 'User'},
  {name: '김땅콩', id: 'user01', pw: '1111', responsibility: 'Admin'},
  {name: '김치즈', id: 'user02', pw: '1111', responsibility: 'User'},
  {name: '정망고', id: 'user03', pw: '1111', responsibility: 'User'}
]
const cartData = [
 {id:'user01', prodCode: 'P001', prodName: 'Buttons tweed blazer', price: 35000, likeIt: 5, image:'img/product/product-1.jpg', sale: 0, qyt: 1},
 {id:'user01', prodCode: 'P002', prodName: 'Flowy striped skirt', price: 40000, likeIt: 5, image:'img/product/product-2.jpg', sale: 15, qyt: 2}
]
const loginData = [ // 현재 로그인 정보
  {name: '비회원', id: 'user00', pw: '0000', responsibility: 'User'}
]