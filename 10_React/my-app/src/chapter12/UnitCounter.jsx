import React, { useState } from 'react';

function UnitCounter(props) {
  const { length, onLengthChange } = props;

  return (
    <>
      <button type='button' onClick={() => onLengthChange(Math.max(length - 1, 0))}>-</button>
      {/* Math.max() 두개의 인자값 중 더 큰 값을 반환하기 때문에 음수로 내려가면 0 */}
      {length}
      <button type='button' onClick={() => onLengthChange(length + 1)}>+</button>
    </>
  );
}

export default UnitCounter;