import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap'
import CreateQuestDropdownItem from './CreateQuestDropdownItem';
import RegionsDropdown from './RegionsDropdown';

const CreateQuest = ({quests, regions, characters, onCreateQuest}) => {
    const [selectedRegion, setSelectedRegion] = useState(null)
    const [selectedLevel, setSelectedLevel] = useState(1)
    const [selectedType, setSelectedType] = useState('')
    const [selectedLocation, setSelectedLocation] = useState([])
    const [selectedCharacters, setSelectedCharacters] = useState([])
    const [questName, setQuestName] = useState('')
    const [locations, setLocations] = useState([])
 
    const [formData, setFormData] = useState({
        name: questName,
        level: selectedLevel, 
        type: selectedType,
        region: selectedRegion,
        location: selectedLocation,
        characters: selectedCharacters
    })

    const regionsList = Object.keys(regions).filter(region => !region.includes(','))
    
    const handleRegionSelect = (event) => {
        let key = event.target.ariaLabel
        const value = event.target.value
        setFormData({...formData, [key]: value });
        setLocations([...regions[value]])
        setSelectedLocation(value)
     }

     const handleTextChange = (e) => {
            setQuestName(e.target.value)
            setFormData({...formData, name: e.target.value})
     }
     const handleOptionSelect = (event) => {
        
        const key = event.target.ariaLabel
        const value = event.target.value
        if(key === 'characters') {
            setFormData({...formData, [key]: [[value]]})
        }else if (key === 'location'){
            setSelectedLocation(value)
            setFormData({...formData, [key]: [[value]]})
        }else if(key=== 'level') {
            setFormData({...formData, [key]: parseInt(value)})
        }else{
            setFormData({...formData, [key]: value})
        }
     }

     const handleSubmit = (event) => {
        event.preventDefault()
        onCreateQuest(formData)
     }
     
    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="questName">
                <Form.Label>Quest Name</Form.Label>
                <Form.Control 
                    type="text" 
                    aria-label={'level'} 
                    value={questName} 
                    onChange={handleTextChange} 
                    placeholder="Enter quest name" 
                    />
            </Form.Group>
            <Form.Group className='mb-3' controlId='questLevel'>
                <Form.Label>Quest Level:</Form.Label>
                <Form.Select onChange={handleOptionSelect} aria-label={'level'}>
                    <option>Make a selection</option>
                    <CreateQuestDropdownItem quests={quests} attributeKey={'level'}/>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='questType'>
                <Form.Label>Quest Type:</Form.Label>
                <Form.Select onChange={handleOptionSelect} aria-label={'type'}>
                    <option>Make a selection</option>
                    <CreateQuestDropdownItem quests={quests} attributeKey={'type'}/>
                </Form.Select>
            </Form.Group>
            <Form.Group  className='mb-3' controlId='questRegion'>
                <Form.Label>Quest Region:</Form.Label>
                <Form.Select onChange={handleRegionSelect}  aria-label={'region'}>
                    <option>Make a selection</option>
                    <RegionsDropdown regions={regionsList} attributeKey={'region'}/>
                </Form.Select>
            </Form.Group>
            { locations.length !== 0 ? 
                <Form.Group className='mb-3' controlId='questLocation'>
                    <Form.Label>Quest Location:</Form.Label>
                    <Form.Select value={selectedLocation} onChange={handleOptionSelect} aria-label={'location'}>
                        <option>Make a selection</option>
                        <RegionsDropdown regions={locations}/>
                    </Form.Select>
                </Form.Group> : null
            }
            <Form.Group className='mb-3' controlId='questCharacter'>
                <Form.Label>Main Character:</Form.Label>
                <Form.Select onChange={handleOptionSelect} aria-label={'characters'}>
                    <option>Make a selection</option>
                    <RegionsDropdown regions={characters} />
                </Form.Select>
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CreateQuest;