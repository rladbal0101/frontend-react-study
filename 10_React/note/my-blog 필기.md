# 새 프로젝트 시작(my-blog)

<PostListItem>
: 글의 제목만 표시해주는 컴포넌트

<PostList>
: map() 함수를 사용하여 PostListItem을 반복 렌더링하는 컴포넌트
  props로 posts라는 배열을 받아옴

<CommentListItem>
: 댓글의 내용만 표시해주는 컴포넌트

<CommentList>
: map() 함수를 사용하여 CommentListItem을 반복 렌더링하는 컴포넌트

<MainPage>
: 처음 접속 시 보게 될 페이지(=컴포넌트)
  글 작성 버튼과 글 목록을 보여줌
- 글 작성 버튼
  <Button> onClick에 함수 지정 => navigate를 이용해 경로 지정
- 글 목록
  <PostList> posts에 서버에서 받은(가정) 데이터를 넣어줌

<App.js>
: 일반적으로 라우팅은 App 컴포넌트에 구현하게 되는데
  App 컴포넌트가 가장 처음으로 렌더링되는 최상위 컴포넌트이기 때문

<PostWritePage>
: 글 작성을 위한 페이지(=컴포넌트)

<PostViewPage>
: 글을 볼 수 있게 해주는 페이지(=컴포넌트)

* URL 파라미터 사용
  useParams(): URL 파라미터에 입력한 값을 가져올 수 있음
  <App.js>
    <Route path="/post/:postId" />
    경로에서 콜론(:)을 찍으면 변수 선언 가능

  - URL 파라미터를 여러개 쓰고 싶다면..?
    위와 같은 방법으로 이어서 계속 사용
  <Route path="/post/:postId/:otherValue/:anotherValue" />
  - [Optional Segments] 필수가 아닌 옵션값으로 처리하고 싶다면..?
    물음표(?)를 사용
    <Route path="/post/:postId/:otherValue?/:anotherValue?" />


# 배포하기
- 빌드를 통해 생성된 정적인 파일들을 배포하려는 서버에 올리는 과정
<package.json> 에서 build 확인
npm run build
- 서버에 올릴때는 빌드 산출물만 올리면 됨!