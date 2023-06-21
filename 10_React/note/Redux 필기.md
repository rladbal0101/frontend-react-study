# Redux
: 전역 상태 관리 라이브러리
  Redux Toolkit and React-Redux 설치하기
> npm install @reduxjs/toolkit react-redux

Context API는? 단순히 데이터를 공유해주는 기능
Redux는? 공유 + 상태 관리가 용이
Redux Store라는 저장소에 state를 저장할 수 있음

# Redux: 전역 상태 관리 라이브러리
참고로 redux toolkit이라는 라이브러리를 설치할 건데 redux의 개선 버전임
사용법(문법)이 좀 더 쉬워짐
Redux 개발팀에서 Redux 표준은 RTK를 쓰라고 권장함

만약에 카운터의 state가 여기저기 컴포넌트에서 공유가 필요하다면 어디에 만들어야할까?
공통 부모에 만들고 props로 자식에게 전달해야 됨(state 끌어올리기)

근데 Redux를 사용하면 컴포넌트들이 props 없이 state 공유 가능 (Redux 쓰는 가장 큰 이유!)
Context API는? 단순히 데이터를 공유해주는 기능이고 Redux는 공유 + 상태 관리가 용이

Redux Store라는 저장소에 state를 저장할 수 있음(=전역 상태 <=> 지역 상태: 리액트 컴포넌트에 직접 만든 state)
컴포넌트들은 Redux Store에서 직접 state를 꺼내오면 됨
대규모 프로젝트에서는 거의 Redux 사용! (구인 시 대부분 Redux 요구)

Q. Redux 쓰면 편한데 props 쓸 필요가 있을까?
1) 외부 라이브러리 설치 필요
2) 사용 설정을 위한 반복적인 준비 코드(문법)들이 필요(이런 코드를 보일러 플레이트**라 부름)
근데 Redux 쓴다고 해서 모든 state들을 Redux Store 안에 넣는 것은 지양
(자바스크립트에서도 모든 변수를 전역으로 쓰지 않음, 함수내에서만 쓰는 것은 지역 변수 활용)
- 공유가 필요없는 state는 X
- 간단히 끌어올려서 그 부분에서만 쓸 수 있는 state는 X

(참고) **보일러 플레이트 코드
기능을 수행하기 위해 많은 상용구 코드를 작성
꼭 필요한 간단한 기능인데, 반복적인 코드를 필요로 하며, 이것이 중복되어 많은 양의 코드를 양산하는 것
별 수정 없이 반복적으로 사용되는 코드, 소위 말하는 찍어내는 코드
Redux가 어려운 점은 이런 보일러 플레이트 코드의 작성이 매우 많음(=> RTK로 넘어오면서 획기적으로 줄어듦)

# redux essential
홈페이지에 그림 참고

# Redux 사용법
1. Redux Store 만들기 <store.js>
전역 state를 보관하는 저장소
createStore(); // deprecated
configureStore()를 쓰면 Redux DevTools 설정이 자동으로 추가됨
(Redux DevTools는 크롬 웹 스토어에서 따로 설치!)
(참고) 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있음,
  Store 안에는 현재 전역 상태와 리듀서가 들어가 있음

2. 리액트에 Redux Store 제공하기 <index.js> 
import { Provider } from "react-redux";
Provider를 이용하여 

CounterApp 컴포넌트와 그 하위 자식들은 Redux Store에 접근 가능
Redux Store에 저장된 state들을 마음대로 꺼내 쓸 수 있음

3. Redux State Slice 만들기 <counterSlice.js>
state 초기값으로 원시값, 배열, 객체 등 모든 데이터 타입 사용 가능
일반적으로는 주로 객체 형태로 사용함(가독성이 좋고 state 관리 및 변경이 편함)

> 전역 state 만드는 방법
  useState()랑 비슷한 역할을 하는데 Redux에서는 state 하나를 slice라고 부름
  # createSlice() 함수
  : state이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와줌
    인자값으로 name, initialState, reducers 속성을 갖는 객체를 넣음
  - name : state 이름
  - initialState : state 초기값
  - reducers: state를 변경하는 함수
    state를 변경하는 함수(reducer)들을 정의하고 관련 action을 생성
    현재 state와 action 객체를 파라미터로 받아오고 필요한 경우 상태를 업데이트하고 새 상태를 반환하는 함수

  카피본을 만들어 수정해야하지만 Redux에서는 직접 수정 가능!
  - 만든 slice를 export 해야함

4. Redux Store에 Slice Reducers를 추가하기 <store.js>
  Slice Reducers를 State에 등록을 해야 컴포넌트들이 전역 state를 사용 가능

5. 리액트 컴포넌트에서 Redux Store와 Actions 사용하기 <Counter.js>
  # useSelector()
  : Redux Store에 있는 state를 가져오는 함수

  # useDispatch()
  : Redux Store에 요청을 보내주는 함수(dispatch 변수에 담아 사용)
  - 전역 상태를 업데이트하는 유일한 방법
  # dispatch()
  : 액션 객체를 스토어에 보내는 함수
  -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어줌

  # decrememt() 함수
  : 액션 (객체) 생성 함수