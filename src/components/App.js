import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import '../App.css';
import NavBar from './NavBar';
import Favorites from './Favorites';
import Home from './Home';


function App() {

  const [quests, setQuests] = useState([])
  const [selectedQuest, setSelectedQuest] = useState(null)
  const [sort, setSort] = useState('all')

  useEffect(() => {
    fetch('http://localhost:3004/quests')
    .then(r => r.json())
    .then(quests => setQuests(quests))
  }, [])
  
  const onQuestClick = (quest) => {
    setSelectedQuest(quest)
  }

  const onDropDownChange = (key) => {
    setSort(key)
  }

  const onFavoriteClick = (id, favsKeyUpdateObj) => {
    fetch(`http://localhost:3004/quests/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favsKeyUpdateObj)
    })
    .then(r => r.json())
    .then(updatedQuest => {
      setSelectedQuest(updatedQuest)
      setQuests(quests.map(quest => {
        if(quest.id === updatedQuest.id) {
          return updatedQuest
        }else{
          return quest
        }
      }))
    })
  }

  let displayedQuests
  if (sort === 'all') {
    displayedQuests = [...quests]
  } else if (sort === 'level') {
    displayedQuests = [...quests].sort(function(a,b) {
      return a[sort] - b[sort];
    })
  }else{
    displayedQuests = [...quests].sort(function(a, b) {
      const nameA = a[sort].toUpperCase()
      const nameB = b[sort].toUpperCase()
      if(nameA < nameB) {
        return -1
      }
      if(nameA > nameB) {
        return 1
      }
      return 0;
    });
  }
  
  return (
    <div>
      <NavBar onDropDownChange={onDropDownChange} />
      <Switch>
        <Route path='/favorites'>
          <Favorites onFavoriteClick={onFavoriteClick} quests={quests.filter(quest => quest.isLiked)} />
        </Route>
        <Route exact path='/'>
          <Home onFavoriteClick={onFavoriteClick} selectedQuest={selectedQuest} onQuestClick={onQuestClick} quests={displayedQuests}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
