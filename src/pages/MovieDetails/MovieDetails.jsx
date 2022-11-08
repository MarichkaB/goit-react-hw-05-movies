import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from 'API/api';

import MovieInfo from 'components/MovieInfo';
import Container from 'components/Container';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    API.getMovieDetails(movieId)
      .then(({ data }) => {
        setFilm(data);
        setStatus('success');
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <main>
      <Container>
        {status === 'success' && <MovieInfo film={film} />}
        <Outlet />
      </Container>
    </main>
  );
};

export default MovieDetails;
