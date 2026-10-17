import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ShowList from "./ShowList";

function Shows() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (search === "") {
      fetch("https://api.tvmaze.com/shows?page=0")
        .then((res) => res.json())
        .then((data) => {
          setShows(data.slice(0, 40));
          setLoading(false);
        });
    } else {
      // search api gives { score, show }
      fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setShows(data.map((item) => item.show));
          setLoading(false);
        });
    }
  }, [search]);

  let result = shows.filter((show) => {
    return genre === "all" || show.genres.includes(genre);
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>TV Shows</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        genre={genre}
        setGenre={setGenre}
      />

      <h3>Shows: {result.length}</h3>

      <ShowList shows={result} />
    </div>
  );
}

export default Shows;
