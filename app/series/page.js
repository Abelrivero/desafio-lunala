
import Header from "../../components/Header"
import MovieRow from "../../components/MovieRow"


const API_TOKEN = process.env.NEXT_PUBLIC_API_KEY
const urlMovieList = 'https://api.themoviedb.org/3/discover/tv';
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    cache: "no-store",
  }

export default async function Series(){
    let series = []
      try{
        const res = await fetch(urlMovieList, options);
        if (!res.ok) {
          console.error(`Error en la API: ${res.status}`);
        } else {
        const data = await res.json();
        series = data.results || [];
        }
      }catch(error){
        console.error("Error fetching movies:", error);
      }

    return(
        <div>
            <Header/>
            <div className="container mx-auto px-4 py-4">
                <MovieRow title={"Series"} movies={series}/>
            </div>
        </div>
    )
}