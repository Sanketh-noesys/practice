import { useEffect, useState } from 'react';
import { genreDTO } from '../genres/genres.model';
import { movieTheaterDTO } from '../movietheaters/movieTheater.model';
import MovieForm from './MovieForm';
import axios, { AxiosResponse } from 'axios';
import { urlMovies } from '../endpoints';
import { movieCreationDTO, moviesPostGetDTO } from './movies.model';
import Loading from '../utils/Loading';
import { convertMovieToFormData } from '../utils/formDataUtils';
import { useHistory } from 'react-router-dom';

export default function CreateMovie(){

    const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState<movieTheaterDTO[]>([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlMovies}/postget`)
            .then((response: AxiosResponse<moviesPostGetDTO>)=> {
                setNonSelectedGenres(response.data.genres);
                setNonSelectedMovieTheaters(response.data.movieTheaters);
                setLoading(false);
            })
    }, []);

    async function create(movie: movieCreationDTO) {
        try{
            const formData = convertMovieToFormData(movie);
            await axios({
                method: 'post',
                url: urlMovies,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            })
            history.push(`/movie/${response.}`)
        }

    }


    return (
        <>
            <h3>Create Movie</h3>
            {loading ? <Loading/> :
            <MovieForm model={{title: '',inTheaters: false, trailer: '' }}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}

                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={[]}
                selectedActors={[]}
            />}
        </>
    )
}