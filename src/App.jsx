import { useEffect, useState } from 'react';
import './App.scss';
import Dashboard from "./containers/Dashboard"
import Routes from "./containers/Routes"
import NavBar from "./components/NavBar"

function App() {
  const [fragrances, setFragrances] = useState([])

  const grabFragrances = () => {
    fetch(`https://the-perfume-api.herokuapp.com/fragrances`)
      .then((res) => res.json())
      .then((res) => {
        setFragrances(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    grabFragrances()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes fragrances={fragrances} />

    </div>
  );
}

export default App;
