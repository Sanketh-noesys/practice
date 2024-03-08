import axios, { AxiosError } from 'axios'
import MovieTheaterForm from './MovieTheaterForm'
import { movieTheaterCreationDTO } from './movieTheater.model'
import { urlMovieTheaters } from '../endpoints'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import DisplayErrors from '../utils/DisplayErrors'

export default function CreateMovieTheater(){

    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(movieTheater : movieTheaterCreationDTO) {
        try{
            await axios.post(urlMovieTheaters, movieTheater);
            history.push("/movietheaters")
        }
        catch (error) {
            if (error && (error as AxiosError<{ data: string }>).response) {
                setErrors([])
            }
        }

    }

    return (
        <>
            <h3>Create Movie Theater</h3>

            <DisplayErrors errors={errors}/>

            <MovieTheaterForm 
                model={{name: ''}}
                onSubmit={async values => await create(values)}
            />
        </>
    )
}