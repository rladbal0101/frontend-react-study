function MyButton() {
  const handleDeleteWrong = (id, e) => {
    console.log(id + '삭제됨');
  };
  
  const handleDelete = (id, e) => {
    debugger; // e.target 밑에 어떤 기능이 있는지 확인하려면 debugger 써서 확인하면 됨. 개발자 도구에서 확인가능 '삭제하기'버튼 클릭하면 debugger 실행 'F10'으로 이동가능 

    // e: 이벤트 객체(발생한 이벤트와 관련한 여러 기능이 담겨있음)
    // e.target: 현재 발생한 이벤트의 대상(여기서는 <button> DOM 객체)
    console.log(id + '삭제됨');
    console.log(e.target);
  };

  return (
    <div>
      {/* 잘못된 방법 */}
      {/* 단순하게 마운트 시 함수가 바로 실행됨 */}
      {/* 이 후 버튼을 눌러도 함수 실행이 안됨 */}
      <button type="button" onClick={handleDeleteWrong(1)}>
        삭제하기(잘못된 방법)
      </button>

      <br />

      {/* 매개변수 event로 들어오는 값은 event 객체임 */}
      <button type="button" onClick={event => handleDelete(1, event)}>
        삭제하기
      </button>
    </div>
  );
}

export default MyButton;