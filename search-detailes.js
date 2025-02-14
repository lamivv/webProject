let searchCode = 0;
searchCode = localStorage.getItem('searchCode');

// 상세정보 조회
// 조회한 상품코드의 productData속 배열 인덱스값을 담을 변수
document.querySelectorAll("span.icon_detailes").forEach(item => {
  item.addEventListener('click', function (e) {
    // e.preventDefault(); // 페이지 이동 잠시 막음
    console.log(item.id); // 상세정보조회에 담으려는 상품의 상품코드
    // 담은 상품코드와 동일한 것을 productData에서 불러와서 담아주기
    for (let i = 0; i < productData.length; i++) {
      if (productData[i].prodCode == item.id) {
        searchCode = i; // 조회하려는 상품의 코드와 productData속 동일한 상품코드를 가진 배열의 인덱스 값
        break;
      }
    } // end of for
    localStorage.setItem('searchCode',searchCode);
    console.log(searchCode);
  })
})