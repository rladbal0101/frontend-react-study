import React from 'react';
import styled from "styled-components";


const MoviesItemBlock = styled.div`
  display: flex;
  
  & + & {
    margin-top: 20px;
  }

  .contents {
    align-items: baseline;
    
    .title {
      display: flex;

      h2 {
        font-size: 18px;;
        margin-right: 10px;
  
        a {
          color: black;
          
          &:hover {
            color: #22b8cf;
          }
        }
      }
    }
    

    p {
      font-size: 14px;
      white-space: normal;
    }
  } 
`;

function MoviesItem({ movie }) {
  const { movieNm, openDt, rank, audiAcc } = movie;
  // console.log(audiAcc);
  const audiAccString = [audiAcc].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return (
    <MoviesItemBlock>
      <div className='contents'>
        <div className='title'>
          <h2>{rank}위</h2>
          <h2>
            <a href="#" target='_blank'>{movieNm}</a>
          </h2>
        </div>
        <div>
          <p>개봉일 : {openDt}</p>
          <p>누적관객수 : {audiAccString}명</p>
        </div>
      </div>
    </MoviesItemBlock>
  );
}

export default MoviesItem;