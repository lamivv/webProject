// index.js
let members = [
  {id:'user01',pw:'1111', name:'홍길동'},
  {id:'user02',pw:'2222', name:'김민서'},
  {id:'user03',pw:'3333', name:'최유진'}
]
let member_json = JSON.stringify(members); // json문자열이 된다
// 회원정보
localStorage.setItem('members',member_json);



// ~연습~
let name = 'hongkildong';
localStorage.setItem('name', 'Hongkildong');
console.log(localStorage.getItem('name'));

// json문자열
// let obj = {name : 'Hongkildong', age: 20}
let json = `{
  "name": "Hongkildong",
  "age": 20
}`
// 문자열을 자바스크립트의 객체로 편하게 바꿔주는 ...
let obj = JSON.parse(json);
console.log(json, obj);

// obj.name, obj.age 

localStorage.setItem('friend', json);
let info = localStorage.getItem('friend');
console.log(JSON.parse(info).name);
console.log(JSON.parse(info)['age']);

localStorage.setItem('friend2', obj);
info = localStorage.getItem('friend2');
console.log(info.name);

// 저장할때는 문자열`{"name": "Hongkildong", "age": 20}`형식(Json 문자열)으로 setItem
// 출력할 때는 getItem한 후에JSON.parse(...) 문자열을 자바스크립트의 객체로 사용할 수 있음

// 객체를 문자열로 변경하는 방법
obj = {
  name: '홍길동',
  friends: [{
      name: '김민수',
      phone: '010-1111'
    },
    {
      name: '박현수',
      phone: '010-2222'
    }
  ]
}

json = JSON.stringify(obj); // 객체를 문자열로 변경
console.log(json);
localStorage.setItem('myfriend', json);
