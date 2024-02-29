import { Link } from "react-router-dom";

export default function IndexMovieTheaters(){
    return (
        <>
            <h2>Movie Theaters</h2>
            <Link className="btn btn-primary" to="/movietheaters/create">Create Movie Theater</Link>
        </>
    )
}