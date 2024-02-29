import { Link } from "react-router-dom";

export default function IndexGenres(){
    return (
        <>
            <h2>Genres </h2>
            <Link className="btn btn-primary" to="/genres/create">Create genre</Link>
        </>
    )
}