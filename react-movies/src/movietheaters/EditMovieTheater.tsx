import { Link } from "react-router-dom";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater(){
    return(
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm model={{name:'Sambil'}}
                onSubmit={value => console.log(value)}
            />
        </>
    )
}