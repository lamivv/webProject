// init.js
// 상품정보와 회원정보의 변수 초기값 지정
/*
상품 관련 필요속성
상품코드
상품명
상품가격
평점
이미지
할인율
------------------------
회원 관련 필요속성
회원아이디
회원비밀번호
회원이름
권한(일반사용자/관리자)
*/
const productData = [
  {prodCode: 'P001', prodName: 'Buttons tweed blazer', type : 'women', price: 35000, likeIt: 5, image:'img/product/product-1.jpg', sale: 0, new: 1},
  {prodCode: 'P002', prodName: 'Flowy striped skirt', type : 'men', price: 40000, likeIt: 5, image:'img/product/product-2.jpg', sale: 15, new: 0},
  {prodCode: 'P003', prodName: 'Cotton T-Shirt', type : 'men', price: 30000, likeIt: 5, image:'img/product/product-3.jpg', sale: 0, new: 0},
  {prodCode: 'P004', prodName: 'Slim striped pocket shirt', type : 'men', price: 25000, likeIt: 5, image:'img/product/product-4.jpg', sale: 0, new: 0},
  {prodCode: 'P005', prodName: 'Fit micro corduroy shirt', type : 'woman', price: 30000, likeIt: 5, image:'img/product/product-5.jpg', sale: 20, new: 0},
  {prodCode: 'P006', prodName: 'Tropical Kimono', type : 'women', price: 22000, likeIt: 5, image:'img/product/product-6.jpg', sale: 5, new: 0},
  {prodCode: 'P007', prodName: 'Contrasting sunglasses', type : 'woman', price: 45000, likeIt: 5, image:'img/product/product-7.jpg', sale: 0, new: 1},
  {prodCode: 'P008', prodName: 'Water resistant backpack', type : 'men', price: 36000, likeIt: 5, image:'img/product/product-8.jpg', sale: 0, new: 0}
]
5
6
7
8
9
const memberData = [
  {id: 'user01', pw: 1111, name: '김땅콩', responsibility: 'User'},
  {id: 'user02', pw: 1111, name: '김치즈', responsibility: 'User'},
  {id: 'user03', pw: 1111, name: '정망고', responsibility: 'Admin'}
]
const cartData = [
  {id:'user01',product:'P001', qyt: 3},
  {id:'user01',product:'P002', qyt: 1},
  {id:'user02',product:'P003', qyt: 5},
  {id:'user03',product:'P001', qyt: 2}
]