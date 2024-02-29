import { useEffect, useState } from "react";
import MoviesList from "./MoviseList";
import { landingPageDTO } from "./movies.model";

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>({});


    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: 'Iron Man',
                        poster: 'https://th.bing.com/th/id/OIP.659tdIpBIl-ZwwMFPGee3gHaEo?rs=1&pid=ImgDetMain',
                    },
                    {
                        id: 2,
                        title: 'Luca',
                        poster: 'https://th.bing.com/th?id=OIP.0ryy7wRAwQPuTOUrDir0mQHaK-&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
                    },
                ],
                upcomingReleases: [
                    {
                        id: 3,
                        title: "Iron man 4",
                        poster: 'https://th.bing.com/th/id/OIP.hY_R2Gx0aruCwyx0ht2d-wAAAA?w=122&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                    }
                ]
            })
        }, 1000);

        return () => clearTimeout(timerId)
    })

    return (
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )

}