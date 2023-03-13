import useFetch from "../data/useFetch";
import Table from "./Table";

const Movies = () => {
    
    // const {data: movies, isPending} = useFetch("https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json")

    // console.log(movies)

    return ( 
        <div className="movies">
            <h2>Movies</h2>
            <Table/>
                
        </div>
    );
}
 
export default Movies;