// 현재 로그인명단
let loginData = [];
loginData = JSON.parse(localStorage.getItem('loginData'));

// 로그인이 되어있으면 register버튼삭제/login버튼삭제/user_name님 환영합니다/logout버튼생성

let LoginInfo_Length = document.querySelectorAll('.LoginInfo');
for (let i = 0; i < LoginInfo_Length.length; i++) {
  if (loginData[0].name == "비회원") {
    // 로그인이 되어있지 않으면 아무런 변화가 없고
  } else {
    // 띄워줄 정보
    let putInfo = `
      <a>${loginData[0].name} 회원님</a>
      <a href="main.html" class="logout-btn">logout</a>`;
    LoginInfo_Length[i].innerHTML = putInfo; // user_name 회원님/logout버튼생성
  }
}

// 로그아웃 버튼 클릭
document.querySelectorAll('.logout-btn').forEach(item => {
  item.addEventListener('click', function (e) {
    console.log('버튼누름');
    // loginData (현재 로그인 명단에) 비회원으로 로그인 ()
    loginData[0] = { // 로그인 명단을 비회원 정보로 바꿔줌
      name: '비회원',
      id: '비회원',
      pw: '비회원',
      responsibility: 'User'
    };
    localStorage.setItem('loginData', JSON.stringify(loginData)); //json문자열로 변환해서 저장
    alert('로그아웃 되었습니다');

    // 로그아웃하면 loginData[0].name이 비회원이 되니까
    // user_name 회원님/logout버튼을 삭제하고 register버튼과 login버튼을 생성해야함
    if (loginData[0].name == "비회원") {
      // 띄워줄 정보
      let putInfo = `
        <a href="login.html">Login</a>
        <a href="register.html">Register</a>`;
      LoginInfo_Length[i].innerHTML = putInfo; // user_name 회원님/logout버튼생성
    }
    location.href = "main.html";
  })
})


// let LoginInfo_Length = document.querySelectorAll('.LoginInfo');
// for (let i = 0; i < LoginInfo_Length.length; i++) {
//   if (loginData[0].name == "비회원") {
//     // 띄워줄 정보
//     let putInfo = `
//     <a href="login.html">Login</a>
//     <a href="register.html">Register</a>`;
//     LoginInfo_Length[i].innerHTML = putInfo; // user_name 회원님/logout버튼생성
//   }
// }
// location.href = "main.html";