import { Link } from "react-router-dom";
import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater(){
    return(
        <>
            <h3>Create Movie Theater</h3>
            <MovieTheaterForm model={{name:''}}
                onSubmit={value => console.log(value)}
            />
        </>
    )
}