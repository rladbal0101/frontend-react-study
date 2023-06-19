import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import MoviesItem from './MoviesItem';
import axios from "axios";

const MoviesListBlock = styled.div`
`;

function MoviesList() {

  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888`);

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <MoviesListBlock>
      {movieList && movieList.map((movie) => {
        return <MoviesItem  />
      })}
    </MoviesListBlock>
  );
}

export default MoviesList;


// https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do?serviceId=searchMovieList
// http://json.parser.online.fr/