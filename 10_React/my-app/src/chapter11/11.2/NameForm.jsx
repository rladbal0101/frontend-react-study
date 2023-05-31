import React from 'react';

function NameForm(props) {

  const handleSubmit = () => {
    alert('입력한 이름: ');
  };

  return (
    // 여기서는 기존 HTML 방식과 차이를 보이기 위해 form태그를 그대로 사용함
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" />
      </label>
      <button type='submit'>제출</button>
    </form>
  );
}

export default NameForm;