import { useEffect, useState } from 'react';
import '../App.css';
import NavBar from './NavBar';

function App() {

  const [quests, setQuests] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/quests')
    .then(r => r.json())
    .then(quests => setQuests(quests))
  }, [])

  console.log(quests)
  
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
