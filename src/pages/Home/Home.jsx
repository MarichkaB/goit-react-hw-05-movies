import { useState, useEffect } from 'react';
import { API } from 'API/api';
import s from '../Home/home.module.css';
import MovieList from 'components/MovieList';
import Container from 'components/Container';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    API.getTrending()
      .then(({ data }) => setTrendingFilms(data.results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <main>
      <Container>
        <h1 className={s.title}>Trending today</h1>
        {trendingFilms.length > 0 && <MovieList films={trendingFilms} />}
      </Container>
    </main>
  );
};

export default Home;
