## Bootstrap
레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
리액트 용이 따로 있는데 나는 기존것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
https://react-bootstrap.netlify.app/
> 부트스트랩 사용시 꼭 CSS import 해야함
(import 'bootstrap/dist/css/bootstrap.min.css';)

## 패키지 설치하기
npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios


# Header 컴포넌트 추출
부모 안에 자식들을 렌더링해 보여줌(어디에 보여줄지는 부모안에서 Outlet 컴포넌트로 지정)

# Main
- 메인 이미지 섹션
  <App.js>에서 메인페이지 Route 지정할 때 헤더랑 같은 첫 페이지 이므로 index로 지정 가능함

- 상품 목록 레이아웃 섹션
  Grid로 섹션을 나눔
  Col 안의 md, sm 등은 일반적인 중단점(분기점, Break Point)

# ProductDetail
  useParams() 으로 URL 파라미터 가져오기
  useEffect()를 사용하지 않으면 무한 렌더링에 빠짐
  반드시 useEffect를 사용한다

  <!-- 숫자 포맷 -->
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl