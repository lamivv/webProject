// member.js

// localStorage에서 members정보를 가져와서 활용
let members = [];
members = JSON.parse(localStorage.getItem('members')); // json문자열을 자바스크립트 객체로 만드는게 parse
console.log(members);

// members의 값을 활용해서 tbody영역의 html작성
members.forEach(function (elem, idx, ary) {
  document.querySelector('#list').innerHTML += makeRow(elem);
});

// id, pw, name 속성을 활용하여 tr>td*3 생성하는 함수
function makeRow(item = {}){ //매개값으로 숫자나 문자가 오는게 아니라 객체가 매개값
  let str = ''; // tr> td*3
  str += '<tr>';
  for (let prop in item) { //for... in -> 속성을 가지고 루핑 prop에 id넣고 prop에 pw 넣고...
    str += '<td>' + item[prop] + '</td>'
  }
  str += '</tr>';
  return str; // 생성된 tr>td*3를 반환
}


//  form.submit 이벤트 정의
document.forms.addMember.addEventListener('submit', function (e) {
  e.preventDefault(); // 서브밋의 기본 이벤트 차단 (action으로 페이지 이동)
  let id = document.querySelector('input[name="user_id"]').value;
  let pw = document.querySelector('input[name="user_pw"]').value;
  let name = document.querySelector('input[name="user_name"]').value;

  // let newItem = makeRow({id:id,pw:pw,name:name}) //속성:값
  let newItem = makeRow({id, pw, name}) //속성:값이 같으면 한번만 써도 됨
  document.querySelector('#list').innerHTML += newItem;

  // localStorage에 저장
  members.push({id, pw, name});
  localStorage.setItem('members',JSON.stringify(members)); //json문자열로 변환해서 저장
})