import { useParams,useNavigate } from "react-router-dom";
import useFetch from "../data/useFetch";

const MovieDetails = () => {
    const {data: movies, isPending} = useFetch("https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json")
    
    const {movieTitle} = useParams()
    
    const find = movies.find(e=>e.title===movieTitle)
    console.log(find)

    const navigate = useNavigate()

    return ( 
        <div className="movie-detail">
            {/* {find && <MovieInfo find={find}/>} */}
            {find && <h2>{find.title}</h2>}
            {find && <p>{find.year}: {find.genre}</p>}
            {find && <p>Director: {find.director}</p>}
            {find && <p>{find.plot}</p>}
            {find && <p>Actors: {find.actors}</p>}
            
            <button onClick={()=>navigate("/movies")}>Return</button>


        </div>
    );
}
 
export default MovieDetails;