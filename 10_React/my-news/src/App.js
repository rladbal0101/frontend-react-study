import { Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    // <>
    //   <NewsList />
    // </>
    
    <Routes>
      {/* ?는 category 값이 선택적이라는 의미.
        즉, 있을 수도 있고, 없을 수도 있다는 뜻
      */}
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;

// 0. 패키지 설치
// npm install styled-components axios react-router-dom

// 1. newsapi 키 발급받기
// 아래 사이트 회원가입
// https://newsapi.org/

// API key
// ceb8d915e94f45079475365770e158c2

// 2. 사용할 API = 한국 뉴스를 가져오는 API
// https://newsapi.org/s/south-korea-news-api
// 1) 헤드라인 뉴스 불러오기
// 2) 헤드라인 중 특정 카테고리 뉴스 불러오기