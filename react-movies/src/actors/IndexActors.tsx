import { urlActors } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { actorDTO } from './actors.model';

export default function IndexActors() {
    return (
        <IndexEntity<actorDTO>
            url={urlActors} createUrl='actors/create' title="Actors"
            entityName="Actor"
        >
            {(actors, buttons) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {actors?.map(actor => <tr key={actor.id}>
                        <td>
                            {buttons(`actors/edit/${actor.id}`, actor.id)}
                        </td>
                        <td>
                            {actor.name}
                        </td>
                        <td>
                        <img src={actor.picture}
                        style={{ width: '120px', height: '160px' }}
                        alt="poster"
                    />
                        </td>
                    </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}