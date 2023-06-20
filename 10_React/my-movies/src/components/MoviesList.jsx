import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import MoviesItem from './MoviesItem';
import axios from "axios";

const MoviesListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleMovie = {
  movieNm: '범죄도시3',
  openDt: '2011-12-15',
  rank: '1',
}

function MoviesList() {

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`);

        console.log(response);
        console.log(response.data);
        console.log(response.data.boxOfficeResult);
        console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
        setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);

      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchMoviesData();
  }, []);

  if (loading) {
    return <MoviesListBlock>로딩중..</MoviesListBlock>
  }

  return (
    <MoviesListBlock>
      {/* <MoviesItem movie={sampleMovie} />
      <MoviesItem movie={sampleMovie} />
      <MoviesItem movie={sampleMovie} /> */}
      {movies && movies.map((movie) => 
        <MoviesItem key={movie.rank} movie={movie} />
      )}
    </MoviesListBlock>
  );
}

export default MoviesList;


// https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do?serviceId=searchMovieList
// http://json.parser.online.fr/