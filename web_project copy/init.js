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
  {prodCode: 'P001', prodName: '사과', price: 2000, likeIt: 4, image:'image/apple.jpg', sale: 15},
  {prodCode: 'P002', prodName: '수박', price: 12000, likeIt: 3, image:'image/watermelon.jpg', sale: 10},
  {prodCode: 'P003', prodName: '복숭아', price: 3000, likeIt: 5, image:'image/peach.jpg', sale: 0},
  {prodCode: 'P004', prodName: '포도', price: 5000, likeIt: 5, image:'image/grape.jpg', sale: 10}
]
const memberData = [
  {id: 'user01', pw: 1111, name: '홍길동', responsibility: 'User'},
  {id: 'user02', pw: 1111, name: '김민서', responsibility: 'User'},
  {id: 'user03', pw: 1111, name: '황주연', responsibility: 'Admin'}
]
const cartData = [
  {id:'user01',product:'P001', qyt: 3},
  {id:'user01',product:'P002', qyt: 1},
  {id:'user02',product:'P003', qyt: 5},
  {id:'user03',product:'P001', qyt: 2}
]