import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedProduct, selectselectedProduct } from '../features/product/productSlice';

function ProductDetail() {
  // URL 파라미터 가져오기
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectselectedProduct);

  const [showInfo, setShowInfo] = useState(true); // info Alert창 상태

  // 숫자 포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });

  // 처음 마운트 됐을때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ... api call ...
    const foundProduct = data.find((product) => {
      return product.id === productId;
    });
    if (!foundProduct) return;
    dispatch(getSelectedProduct(foundProduct));

  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInfo(false);
      // 여기서는 false라서 상관없지만
      // setShowInfo(!showInfo);
      // !showInfo 이렇게 작성했을때는 3초마다 재렌더링 되면서 무한반복됨
      // useEffect를 사용하여 한번만 렌더링되게 함
    }, 3000);
    // 불필요하게 타이머가 계속 생기는 것을 정리(정리함수)
    return () => {
      clearTimeout(timeout); // 언마운트 되기 직전에 실행됨
    };
  }, []);

  if (!product) {
    // return null; // 아무것도 렌더링하지 않음
    return <div>상품이 존재하지 않습니다.</div>
  }

  return (
    <Container className='pt-3'>
      {/* Quiz: Alert을 띄우고 3초 뒤에 사라지게 만들기
        (힌트: 처음 렌더링 됐을때 setTimeout으로 타이머 설정)
      */}
      {showInfo && 
        <Alert variant="info">
          현재 34명이 이 상품을 보고 있습니다.
        </Alert>
      }

      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{formatter.format(product?.price)}원</p>
          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;