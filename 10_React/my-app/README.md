# React App 구조 살펴보기
- package.json:
  패키지 정보를 관리
  npm install로 패키지 설치 시 기록됨
  설치된 패키지는 node_modules 폴더에 추가됨(git에 올리지 않기때문에 .gitignore에 자동으로 추가되어 있음)
- pakage-lock.json:
  mode_modules 구조나 package.json이 수정되고 생성될 때 당시 의존성에 대한 정확하고 구체적인 정보를 기록하고 자동으로 생성됨
  (중요) git에 올라가야 됨!!
- index.html:
  콘텐츠가 렌더링 될 단 하나의 템플릿 페이지
  Root DOM Node를 갖고 있음
- index.js:
  Root DOM Node에 App 컴포넌트를 렌더링
- App.js:
  실제 보여질 컴포넌트
  사용 예> header-section-main-footer 또는 라우터 작성

React 개발 환경이 적용된 React 프로젝트를 자동으로 생성해주는 Create React App(CRA) 이라는 패키지를 사용
=> 