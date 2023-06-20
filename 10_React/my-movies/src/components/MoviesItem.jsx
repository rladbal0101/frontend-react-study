import React from 'react';
import styled from "styled-components";


const MoviesItemBlock = styled.div`
  display: flex;
  
  & + & {
    margin-top: 20px;
  }

  .contents {
    display: flex;
    align-items: baseline;
    
    h2 {
      font-size: 18px;;
      margin-right: 10px;

      a {
        color: black;
      }
    }

    p {
      font-size: 14px;
      white-space: normal;
    }
  } 
`;

function MoviesItem({ movie }) {
  const { movieNm, openDt, rank } = movie;
  
  return (
    <MoviesItemBlock>
      <div className='contents'>
        <h2>{rank}위</h2>
        <h2>
          <a href="" target='_blank'>{movieNm}</a>
        </h2>
        <p>개봉일 : {openDt}</p>
      </div>
    </MoviesItemBlock>
  );
}

export default MoviesItem;