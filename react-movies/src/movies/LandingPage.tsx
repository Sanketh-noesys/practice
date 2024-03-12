import { useEffect, useState } from 'react';
import { landingPageDTO } from './movies.model';
import MoviesList from './MoviesList';
import axios, { AxiosResponse } from 'axios';
import { urlMovies } from '../endpoints';
import AlertContext from '../utils/AlertContext‎';

export default function LandingPage() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((reponse: AxiosResponse<landingPageDTO>) => {
      setMovies(reponse.data);
    })

  }

  return (
    <AlertContext.Provider value={() => { loadData(); }

    }>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />
      <br/>
      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </AlertContext.Provider>

  )
}