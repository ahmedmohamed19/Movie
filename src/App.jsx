import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';

function App() {
  let [moves, setMoves] = useState([]);



  useEffect(() => {
    (async function getData() {
      try {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=13eb610d3996f496f23cf734ef93bb12`);
        setMoves(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })()
  }, []);

  return (
    <div>
      <Home data={moves} />
    </div>
  );
}

export default App;
