import { useEffect, useState } from "react";

function EffectSummary() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // (공통사항)
  // useEffect는 마운트 시에는 무조건 실행됨!!
  // useEffect의 return 되는 함수는 언마운트 시에는 무조건 실행됨!!

  // 렌더링 될때마다(마운트 + 업데이트) 매번 실행됨
  useEffect(() => {
    console.log('나는 매번 실행됨');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
      // console.log('effect가 실행되기 전과 언마운트 시 실행(마운트 제외)');
    };
  });
  
  // count가 변할때마다 실행됨
  useEffect(() => {
    console.log('%ccount가 변함', 'color: red; background: #ffdae0;');
  }, [count]);

  // name이 변할때마다 실행됨
  useEffect(() => {
    if (name.length === 3) { // name의 길이가 3일때만 출력되게 해보기!
      console.log('%cname이 변함', 'color: blue; background: #e2d6fd;');
    }
    // console.log('%cname이 변함', 'color: blue; background: #e2d6fd;');
  }, [name]);

  // 마운트 될때만 실행됨
  useEffect(() => {
    console.log('%c마운트 될때만 실행', 'color: yellow; background: black;');
    
    return () => {
      // 언마운트 될때만 실행됨
      console.log('%c언마운트 될때만 실행', 'color: red; background: black;');
    };
  }, []);

  return (
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> {/* e: 이벤트 객체, e.targe: DOM 객체 */}
    </div>
  );
}

export default EffectSummary;