import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import '../App.css';
import NavBar from './NavBar';
import Favorites from './Favorites';
import Home from './Home';
import CreateQuest from './CreateQuest';


function App() {

  const [quests, setQuests] = useState([])
  const [selectedQuest, setSelectedQuest] = useState(null)
  const [sort, setSort] = useState('all')

  useEffect(() => {
    fetch('http://localhost:3004/quests')
    .then(r => r.json())
    .then(quests => setQuests(quests))
  }, [])

  const locationsAndRegionsObj = {};

  quests.forEach(quest => {
    let regions = Object.values(quest.region)
    let locations = Object.values(quest.location)
    //if there is one region and one location
    if((regions.length === 1) && (locations.length === 1)) {
      if(!Object.keys(locationsAndRegionsObj).includes(regions[0])) {
        locationsAndRegionsObj[regions] = [...quest.location]
      }else{
        locationsAndRegionsObj[regions] = [...locationsAndRegionsObj[regions], ...quest.location]
      }
  }})

  for(let region in locationsAndRegionsObj) {
    let unique = [...new Set(locationsAndRegionsObj[region])]
    locationsAndRegionsObj[region] = unique
  }

  let charactersArray = []
  quests.forEach(quest => {
    let characters = Object.values(quest.characters)
    return charactersArray = [...charactersArray, ...characters]
  })

  let uniqueCharacters = [...new Set(charactersArray)]
  charactersArray = uniqueCharacters
  console.log(charactersArray)

  
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
        <Route path='/create-quest'>
          <CreateQuest
            quests={quests}
            regions={locationsAndRegionsObj}
            characters={charactersArray}
          />
        </Route>
        <Route path='/favorites'>
          <Favorites  
            sort={sort} 
            onFavoriteClick={onFavoriteClick} 
            quests={displayedQuests.filter(quest => quest.isLiked)} 
          />
        </Route>
        <Route exact path='/'>
          <Home 
            sort={sort} 
            onFavoriteClick={onFavoriteClick} 
            selectedQuest={selectedQuest} 
            quests={displayedQuests}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
