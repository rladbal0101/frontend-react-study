import React from 'react';
import styled from "styled-components";


const MoviesItemBlock = styled.div`
  display: flex;

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  } 
`;

function MoviesItem({ movieList }) {
  const { movieNm, prdtYear, repGenreNm } = movieList;

  return (
    <MoviesItemBlock>
      <div className='contents'>
        <h2>
          <a href="" target='_blank'>{movieNm}</a>
        </h2>
        <p>{prdtYear}</p>
        <p>{repGenreNm}</p>
      </div>
    </MoviesItemBlock>
  );
}

export default MoviesItem;