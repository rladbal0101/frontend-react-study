## Bootstrap
레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
리액트 용이 따로 있는데 나는 기존것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
https://react-bootstrap.netlify.app/
> 부트스트랩 사용시 꼭 CSS import 해야함
(import 'bootstrap/dist/css/bootstrap.min.css';)

## 패키지 설치하기
npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios


# Header 컴포넌트 추출
- 부모 안에 자식들을 렌더링해 보여줌(어디에 보여줄지는 부모안에서 Outlet 컴포넌트로 지정)

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

  <!-- Alert창 애니메이션 -->
  styled-conmponents 에서 keyframes 함수를 이용하여 애니메이션 효과 적용
  기존 Alert 컴포넌트에 추가로 적용하기 때문에 괄호 안에 써줌

  <!-- 주문수량 입력 -->
  제어컴포넌트를 이용한 주문수량 입력
  type을 number로 해도 되지만, text로 하여 유효성 검사로 문자 입력을 제어하고 react toastify를 이용하여 사용자에게 알림창 띄우기
  * react toastify
  > npm install react-toastify
  > react-toastify 사용시 꼭 CSS import 해야함(min.css 확인!)
  (import 'react-toastify/dist/ReactToastify.min.css';)
  
# Main
  <!-- 상품 더보기 -->
  - 버튼 만들기

  * 가짜 API 서버 만들기
  1. json-server (라이브러리)
    장점 CRUD 연습하기 좋음
    단점 사용하려는 컴퓨터에서 매번 로컬 서버를 띄워야 함

  2. My JSON Server (이 방법 사용)
    라이브러리가 아닌 서비스.
    장점 앱을 다른곳에서 사용할 수 있음
    단점 데이터 반영이 안됨 (Read만 가능)
  * My JSON Server 사용법
    GitHub에 저장소 생성(<your-username>/<your-repo>)
    db.json파일 만들기
    서버에 액세스하려면 https://my-json-server.typicode.com/<your-username>/<your-repo>를 방문

  <!-- 더보기를 눌렀을 때 -->
  <productSlice>에 (getMoreProducts) 리듀서 추가
  <Main> 데이터를 가져온(axios) 후 dispatch하여 <productSlice>로 보내줌

  <!-- 위 HTTP 요청 코드를 함수로 만들어서 api폴더로 추출하고, async/await로 바꾸기 -->
  src/api 폴더에 productAPI.js를 만듦
  함수를 따로 만들어서 가져다 사용함 (handleGetMoreProducts)
  handleGetMoreProducts의 getProducts()는 비동기함수이므로 async/await 사용하여 리팩토링

# productSlice
  `★ thunk ★`
  - thunk를 이용한 비동기 작업 처리하기
  - thunk 미들웨어: 액션을 디스패치 했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업을 실행
  * 액션과 리듀서 중간에 끼어있는 중간자 역할
    액션 -> (미들웨어) -> 리듀서
    주로 API 요청 같은 비동기 작업을 수행함

  - thunk를 이용한 비동기 작업 처리 시 이점? 
  1) API 요청에 대한 상태 관리 쉽게 가능(요청 시작-로딩중, 요청 성공 또는 실패 시 로딩이 끝났음을 명시)
  2) 요청이 성공하면 응답에 대한 상태 관리, 실패하면 에러에 대한 상태 관리 등에 용이

  redux-thunk 보다 redux-saga를 많이 이용했지만 redux-thunk가 RTK에 포함되어 나오면서 RTK를 사용(redux-thunk를 따로 설치하지 않아도 됨)

  [createAsyncThunk()]
  : createAsyncThunk() 함수를 이용하여 비동기 작업을 처리하는 액션 생성 함수를 만듦
  - 첫번째 인자값: action type(개발자 임의로 작성)
  - 두번째 인자값: action이 발생했을 때 실행할 비동기 작업(api 요청 같은)
  - 비동기 함수 실행 시 `pending` 상태
  - (리턴은 필수)값을 반환하면 `fulfilled` 상태로 바뀌고 action.payload에 담겨 리듀서 함수로 전달됨
  - thunk를 이용한 비동기적인 작업에는 extraReducers를 사용
  [extraReducers]
  - reducers로 동기 작업을 할 때는 액션 생성 함수를 자동으로 만들어주는 반면
  - extraReducers로 비동기 작업을 할 때는 액션 생성 함수를 자동으로 만들지 못함
  <Main.js>
  - 함수 만들어주기

  => 확인해보려면 Redux 상태 창에서 확인

  <!-- 로딩 만들기 -->
  react spinners를 이용해 로딩 만들기

# ProductDetail
  <!-- 탭 UI 만들기 -->
  Bootstrap/tabs 사용
  - 탭 내용 보여주기(조건부 렌더링)
  - `방법1.` 삼항 연산자 사용
    : 삼항연산자 안에 삼항연산자 안에 삼항... 비효율적
  - `방법2.` 컴포넌트로 추출
    : <TabContents.js>
  - `방법3.` 배열이나 객체 형태로 만들어서 조건부 렌더링(편법)
    `3-1` 배열 형태
    : 배열의 인덱스 값으로 접근 
  - `3-2.` 객체 형태
    : 객체에 접근하려면 .으로 접근하지만 변수를 넣어주려면 대괄호 표기법을 사용