// 현재 로그인명단
let loginData = [];
loginData = JSON.parse(localStorage.getItem('loginData'));

// 로그인이 되어있으면 register버튼삭제/login버튼삭제/user_name님 환영합니다/logout버튼생성

let LoginInfo_Length = document.querySelectorAll('.LoginInfo');
for (let i = 0; i < LoginInfo_Length.length; i++) {
  if (loginData[0].name == "비회원") {
    // 로그인이 되어있지 않으면 아무런 변화가 없고
  } else {
    LoginInfo_Length[i].remove(); // register버튼과 login버튼 삭제
    // 띄워줄 정보
    // <a>${loginData[0].name}님 환영합니다</a>
    let putInfo = `
          <a href="main.html">logout</a>
          `;
    LoginInfo_Length[i].innerHTML = putInfo; // user_name님 환영합니다/logout버튼생성
  }
}