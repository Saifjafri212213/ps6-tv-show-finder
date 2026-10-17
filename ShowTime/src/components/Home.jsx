import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>ShowTime</h1>
      <p>Find your favourite TV shows.</p>
      <Link to="/shows">
        <button>Browse shows</button>
      </Link>
    </div>
  );
}

export default Home;
