import React, { useState } from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray",
  },
  greeting: {
    marginRight: 8
  }
};


function Toolbar(props) {
  const { isLoggedIn, handleClickLogin, handleClickLogout } = props;

  console.log(isLoggedIn);
  return (
    <div style={styles.wrapper}>
      {/* Quiz:
        로그인/로그아웃 버튼을 누를 때마다
        로그인 상태이면 인사말이 나오도록 && 로 조건부 렌더링 
        버튼도 로그인/로그아웃 버튼이 바뀌도록 삼항 연상자로 조건부 렌더링
      */}
      {/* isLoggedIn 값에 따라 조건부 렌더링 처리 */}
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

      {isLoggedIn
        ? <button type='button' onClick={handleClickLogout}>로그아웃</button>
        : <button type='button' onClick={handleClickLogin}>로그인</button>
      }
    </div>
  );
}

export default Toolbar;

// 정리:
// 논리 연산자(&&)와 삼항 연산자(? :)를 이용한 조건부 렌더링은 매우 많이 쓰임
// 동적인 UI 만드는 3 step
// 1. HTML/CSS로 미리 마크업/디자인 완성
// 2. UI 현재 상태를 state로 저장
// 3. 조건문으로 state에 따라 UI가 어떻게 보일지 작성
