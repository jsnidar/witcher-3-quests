import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import '../App.css';
import NavBar from './NavBar';
import Favorites from './Favorites';
import Home from './Home';
import QuestDetails from './QuestDetails';


function App() {

  const [quests, setQuests] = useState([])
  const [selectedQuest, setSelectedQuest] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3004/quests')
    .then(r => r.json())
    .then(quests => setQuests(quests))
  }, [])
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/favorites'>
          <Favorites quests={quests.filter(quest => quest.isLiked)} />
        </Route>
        <Route path='/quest-details'>
          <QuestDetails quest={selectedQuest} />
        </Route>
        <Route exact path='/'>
          <Home quests={quests}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
