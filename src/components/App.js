import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import '../App.css';
import NavBar from './NavBar';
import Favorites from './Favorites';
import Home from './Home';


function App() {

  const [quests, setQuests] = useState([])
  const [selectedQuest, setSelectedQuest] = useState(null)

  const formatCharacters = (quest) => {
    const formattedObj = Object.assign({}, quest)
    const charactersArr = formattedObj.characters.split(', ')
    formattedObj.characters = charactersArr
    const locationArr = formattedObj.location.split(', ')
    formattedObj.location = locationArr
    formattedObj.level = parseInt(formattedObj.level)
    return formattedObj
  }

  useEffect(() => {
    fetch('http://localhost:3004/quests')
    .then(r => r.json())
    .then(quests => setQuests(quests))
  }, [])
  
  const onQuestClick = (quest) => {
    setSelectedQuest(quest)
  }

  console.log(quests)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/favorites'>
          <Favorites quests={quests.filter(quest => quest.isLiked)} />
        </Route>
        <Route exact path='/'>
          <Home selectedQuest={selectedQuest} onQuestClick={onQuestClick} quests={quests}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
