import axios from "axios";

// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 함수로 만듦

// 상품 목록 조회
export const getProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/rladbal0101/db-shop/products');
    // console.log('API실행');

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`); // 에러메세지는 정답이 있는게 아님
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error; // 발생한 에러를 밖으로 던지기
  }
};

// 특정 상품 조회
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/rladbal0101/db-shop/products/${id}`);

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`); // 에러메세지는 정답이 있는게 아님
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error; // 발생한 에러를 밖으로 던지기
  }
};

// 만약 서버로 데이터를 보내야 한다면?
// json-server 이용 시 테스트 가능
export const addProduct = async (product) => {
  try {
    const response = await axios.post(`http://localhost:4000/products`, { product: product }); // 경로는 백엔드 개발자가 정해준 대로 지정, 데이터를 보낼 때 두번째인자로 객체를 보낼 수 있음

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`); // 에러메세지는 정답이 있는게 아님
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error; // 발생한 에러를 밖으로 던지기
  }
};

export const orderProduct = async (productId, orderCount) => {
  try {
    const response = await axios.post(`http://localhost:4000/product-order`, { productId, orderCount }); // 경로는 백엔드 개발자가 정해준 대로 지정

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`); // 에러메세지는 정답이 있는게 아님
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error; // 발생한 에러를 밖으로 던지기
  }
};