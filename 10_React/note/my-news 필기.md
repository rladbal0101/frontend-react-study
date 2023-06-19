# newsapi 키 발급받기 (https://newsapi.org/)
- Your API key is: 95c013e49b594444829e7657306b0772

0. 패키지 설치
npm install styled-components axios react-router-dom

1. newsapi 키 발급받기
아래 사이트 회원가입
https://newsapi.org/

API key
ceb8d915e94f45079475365770e158c2

2. 사용할 API = 한국 뉴스를 가져오는 API
https://newsapi.org/s/south-korea-news-api
1) 헤드라인 뉴스 불러오기
2) 헤드라인 중 특정 카테고리 뉴스 불러오기

<NewsItem>
: 각 뉴스 정보를 보여주는 컴포넌트

<NewsList>
: API를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 컴포넌트 배열로 변환하여 렌더링 해주는 컴포넌트

※ useEffect()를 사용하지 않으면 무한 반복됨

※ useParams()을 이용하여 URL 파라미터에 입력한 값을 가져옴
 => 카테고리 값의 변화에 따른 주소값 변경

# 로딩창
- 로딩 화면 추천: react-spinners 또는 Lottie File 사용

<Categories>
- Link 대신 NavLink 사용해보기
 : to 속성에 적은 경로에 따라 active 상태를 알 수 있는 Link 컴포넌트의 특수한 종류
※ NavLink를 사용하면 클릭한 곳에 active 클래스 자동 생성

* json parser
JSON 파일을 보기 편하게 정리해 주는 사이트