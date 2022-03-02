import { useLoaderData, Link } from "remix";
import LinkButton from "~/components/LinkButton.jsx";
import PageHeader from "~/components/PageHeader.jsx";
import db from "~/db/movies/db.server.js";

export async function loader() {
  return await fetch('http://localhost:3000/api/movies');
}

export default function MovieItems(){
    const movies = useLoaderData();

    return(
        <>
        <PageHeader title="Movies" subtitle="By Christoffer and Wojtek">
            <LinkButton to="/new">New Movie</LinkButton>
        </PageHeader>
        <ul className="grid gap-4 grid-cols-3">
         {movies.map((movie) => (
             <li key={movie.id} className="rounded border border-gray-200 bg-gray-50 p-5">
              <Link to={movie.id} className="font-semibold">
              <img src={movie.cover_url}/>
              <h3>{movie.title}</h3>
              </Link>
              <p>{movie.director}</p>
            
              
             </li>
         )
         )}
        </ul>
        </>
    );
}


