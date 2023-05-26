import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';
import CommentEx from './chapter5/5.6/CommentEx';
import Comment from './chapter5/Comment';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';
import EffectSummary from './chapter7/7.3/ex3/EffectSummary';
import EffectContainer from './chapter7/7.3/ex3/EffectContainer';
import TimerContainer from './chapter7/7.3/ex4/TimerContainer';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Root DOM Node에 렌더링 하도록 하는 함수
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
// root.render(
//   // <React.StrictMode> // 지워줌. 로그가 두번씩 찍혀서 개발할 때 불편함.
//     <App />
//   // </React.StrictMode>
// );

root.render(
  // 3장 예제
  // <JsxUse />
  // <Library />

  // 5장 예제
  // <PropsUse />
  // 5.6 CommentEx 적용하려면
  // <CommentEx 
  //   author= {
  //     {
  //       name: "aaa",
  //       avatarUrl: 
  //     }
  //   }
  // />
  // <CommentList />

  // 6장 예제
  // <NotificationList />

  // 7장 예제
  // 7.2
  // <Counter />
  // <SetStateMerge />
  // 7.3
  // <CounterEffect />
  // <EffectSummary />
  // <EffectContainer />
  // <TimerContainer />

  // 8장 예제
  // <Toggle />
  // <MyButton />
  // <ConfirmButton />

  // 9장 예제
  // <Greeting isLoggedIn={true} />
  <LoginControl />

);


// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드
// (참고로 실제 개발에서 이렇게 쓰는 경우는 없음)
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
