import { useEffect, useState } from 'react';
import './App.scss';
import Routes from "./containers/Routes"
import NavBar from "./components/NavBar"

function App() {
  const [games, setGames] = useState([])

  const grabGames = () => {
    fetch(`https://the-videogames-api.herokuapp.com/games`)
      .then((res) => res.json())
      .then((res) => {
        setGames(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    grabGames()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes games={games} />

    </div>
  );
}

export default App;
