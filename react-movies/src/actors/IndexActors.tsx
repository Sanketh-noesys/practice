import { Link } from "react-router-dom";

export default function IndexActors(){
    return (
        <>
            <h2>Actors </h2>
            <Link className="btn btn-primary" to="/actors/create">Create Actors</Link>
        </>
    )
}