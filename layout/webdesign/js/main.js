// 이미지 슬라이드 쇼 만들기
const slides = document.querySelectorAll('#slides > img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// 이미지 3개 중에서 하나가 표시되면 나머지 이미지는 모두 감춤
// 이전 또는 다음 버튼을 클릭하면 이전이나 다음 이미지를 보여줌
// 슬라이드 번호를 저장할 인덱스 변수 current 선언
let current = 0;

// current 값에 따라 현재 이미지를 보여주는 함수
function showSlides(n) {
  // 모든 이미지를 화면에서 감춤
  for (let i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
  }
  // n번째 이미지만 화면에 표시
  slides[n].style.display = "block";
}

// 이전 이미지를 보여주는 함수
function prevSlide() {
  // current값이 0보다 크면 이전 인덱스로
  // 그렇지 않으면(첫번째 이미지이므로) 마지막 인덱스로
  // 마지막 인덱스는 2를 작성해도 되지만 이미지가 많아질 경우를 대비하여 length를 이용하여 작성함
  if (current > 0) {
    current = current - 1;
  } else {
    current = slides.length - 1;
  }
  showSlides(current);
}

// 다음 이미지를 보여주는 함수
function nextSlide() {
  // current 값이 2보다 작으면 다음 인덱스로
  // 그렇지 않으면(마지막 이미지이므로) 첫번째 인덱스로
  if (current < slides.length - 1) {
    current = current + 1;
  } else {
    current = 0;
  }
  showSlides(current);
}

showSlides(current); // 현재 이미지 표시
prev.addEventListener('click', prevSlide); // 이전 이미지 표시
next.addEventListener('click', nextSlide); // 다음 이미지 표시
// 실행시킬 함수를 전달해야하므로 이미 선언한 함수를 작성
// prevSlide() < 함수명 뒤에 괄호를 붙이지 않음, 괄호를 붙이면 함수를 선언한다는 뜻

// (참고) addEventListener 와 같은 의미
// prev.onclick = prevSlide;
// next.onclick = nextSlide;

// (참고) 이미지 슬라이드 쇼를 자동으로 바꾸는 방법
// const slides = document.querySelectorAll('#slides > img');
// let current = 0;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // 모든 이미지 감춤
  }
  current++; // 다음 이미지로 이동
  if (current > slides.length) { // 마지막 이미지라면
    current = 1; // 첫 번째로 이동
  }
  slides[current - 1].style.display = "block"; // 현재 위치 이미지 표시
  setTimeout(showSlides, 2000); // 2초 마다 showSlides 함수 반복 실행 
}

showSlides(); // 기본적으로 첫 번째 이미지 표시