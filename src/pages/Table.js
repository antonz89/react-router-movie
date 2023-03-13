import { useNavigate } from "react-router-dom";
import useFetch from "../data/useFetch"
// different way to build a table
// const Header = ({columns}) => {
//   return ( 
//     <thead>
//       <tr>
//         {columns.map(column=>(
//           <th key={column} className = "users-table-cell">{column}</th>
//         ))}
//       </tr>
//     </thead>
//    );
// }

// const Content = ({movies,columns}) => {
//   return ( 
//     <tbody>
//       {movies.map((movie)=>(
//         <tr key={movie.title}>
//           {columns.map((column)=>(
//             <td key={column} className="users-table-cell">
//               {movie[column]}
//             </td>
//           ))}
//         </tr>
//       ))}
//     </tbody>
//    );
// }

const Header = () => {
  return ( 
    <thead>
      <tr className="users-table-cell">
          <th>Title</th>
          {/* <th>Actors</th> */}
          <th>Plot</th>
      </tr>
    </thead>
  );
}
const Body = ({movies}) => {
  const navigate = useNavigate()
  
  
  return (  
    <tbody>
      {movies.map((movie)=>(
        <tr key = {movie.title} className="users-table-cell">
          
          <td>{movie.title}</td>
          {/* <td>{movie.actors.join(", ")}</td> */}
          <td>{movie.plot}
            <button 
            className="button-info" 
            onClick={()=>navigate(`/movies/${movie.title}`) }>More Info</button>
            
          </td>
          
          <td>
            {/* <button>Edit</button> */}
            <button>Delete</button>
          </td>

        </tr>
      ))}
    </tbody>
    
  );
}
 const Table = () => {
  const {data:movies, isPending} = useFetch("https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json")

  // different way to build a table
  // const columns = ["title", "actors", "plot", "dateAdded", "director", "genre", "year","imdbRating" ]

  return (
    <div>
      <table className="users-table">
        {/* different way to build a table */}
        {/* <Header columns={columns}/> */}
        {/* {isPending && <h1>Loading...</h1>} */}
        {/* <Content movies={movies} columns={columns}/> */}

        <Header/>
        {isPending && <h1>Loading...</h1>}
        <Body movies={movies}/>
      </table>
    </div>
  )
    
  
}

export default Table;