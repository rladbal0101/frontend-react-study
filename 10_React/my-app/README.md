# React App 구조 살펴보기
- package.json:
  패키지 정보를 관리
  npm install로 패키지 설치 시 기록됨
  설치된 패키지는 node_modules 폴더에 추가됨(git에 올리지 않기때문에 .gitignore에 자동으로 추가되어 있음)
- pakage-lock.json:
  mode_modules 구조나 package.json이 수정되고 생성될 때 당시 의존성에 대한 정확하고 구체적인 정보를 기록하고 자동으로 생성됨
  (중요) git에 올라가야 됨!!
- App.js:
  실제 보여질 컴포넌트
  사용 예> header-section-main-footer 또는 라우터 작성
- index.js:
  Root DOM Node에 App 컴포넌트를 렌더링
- index.html:
  콘텐츠가 렌더링 될 단 하나의 템플릿 페이지
  Root DOM Node를 갖고 있음

React 개발 환경이 적용된 React 프로젝트를 자동으로 생성해주는 Create React App(CRA) 이라는 패키지를 사용하면
=> 위 구조가 생김

# React App을 실행시키려면?
  pull 받은 후 
  terminal 창에
  > cd 10_React\my-app(진행 프로젝트)
  > npm install (경로 확인 후 my-app(진행 프로젝트) 내에서 install)
  (처음 작업을 시작할때/새로운 패키지를 설치할 경우에만 하면 됨)
  설치가 끝나면 node_modules 폴더가 생김
  (npm install 은 package.json 파일이 있는 곳에서만 실행 됨 -> dependencies의 목록을 보고 설치 하기 때문)

  > npm start
  package.json 파일 Debug 부분에 scripts가 start 된다