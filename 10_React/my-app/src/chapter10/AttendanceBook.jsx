import React from 'react';

// Quiz2: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고 배열 렌더링 시 Key값 추가해보기
const students = [
  {
    id: 'student1',
    name: '김유미',
  },
  {
    id: 'student2',
    name: '유한나',
  },
  {
    id: 'student3',
    name: '홍세현',
  },
  {
    id: 'student4',
    name: '김민지',
  },
];

// 출석부 이름 출력하기
function AttendanceBook(props) {
  return (
    <ul>
      {/* Quiz: 학생 이름을 반복 렌더링 해보기 */}
      {/* {students.map((student, index) => {
        console.log(student.name);
        return <li key={student.id}>{student.name}</li>;
      })} */}
      {students.map(student => <li key={student.id}>{student.name}</li>)}
    </ul>
  );
}

export default AttendanceBook;