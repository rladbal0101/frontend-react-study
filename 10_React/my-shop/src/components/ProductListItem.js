import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 방법1: 스타일드 컴포넌트로 스타일 확장
// const styledCol = styled(Col)` // 기존에 만들어놓은 컴포넌트에 스타일 추가는 ()
//   cursor: pointer;
// `;

function ProductListItem({ product }) {
  // const { product } = props;

  // 이동 경로 설정하기
  const navigate = useNavigate();
  
  return (
    // 방법2: 공통 스타일로 작성 (클래스명 추가)
    <Col md={4} className='cursor-pointer'>
      <img src={product.imagePath} width="80%" 
        onClick={() => {
          // /detail/해당 상품 id
          navigate(`/detail/${product.id}`)
        }}
      />
      <h4>{product.title}</h4>
      <p>{product.price}원</p>
    </Col>
  );
}

export default ProductListItem;