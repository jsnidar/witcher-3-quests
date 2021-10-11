import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import CreateQuestDropdownItem from './CreateQuestDropdownItem';
import RegionsDropdown from './RegionsDropdown';

const CreateQuest = ({quests, regions, onCreateQuest}) => {
    
    const [selectedLocation, setSelectedLocation] = useState([])
    const [locations, setLocations] = useState([])
 
    const [formData, setFormData] = useState({
        name: '',
        level: 1, 
        type: '',
        region: null,
        location: selectedLocation,
        characters: null
    })

    const history = useHistory();

    const regionsList = Object.keys(regions).filter(region => !region.includes(','))
    
    const handleRegionSelect = (event) => {
        let key = event.target.ariaLabel
        const value = event.target.value
        setFormData({...formData, [key]: value });
        setLocations([...regions[value]])
        setSelectedLocation(value)
     }

     const handleTextChange = (e) => {
            setFormData({...formData, name: e.target.value})
     }

     const handleOptionSelect = (event) => {
        const key = event.target.ariaLabel
        const value = event.target.value
        if(key === 'characters') {
            setFormData({...formData, [key]: [[value]]})
        }else if (key === 'location'){
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
        history.push('/')
     }
     console.log(formData)
    return ( 
        <Container className='containers'>
            <Row>
                <h2>Create New Quest</h2>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="questName">
                            <Form.Label>Quest Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                aria-label={'name'} 
                                value={formData.name} 
                                onChange={handleTextChange} 
                                placeholder="Enter quest name" 
                                />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='questLevel'>
                            <Form.Label>Quest Level:</Form.Label>
                            <Form.Select onChange={handleOptionSelect} aria-label={'level'}>
                                <option>Make a selection</option>
                                <CreateQuestDropdownItem quests={quests} attributeKey={'level'}/>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='questCharacter'>
                            <Form.Label>Main Character:</Form.Label>
                            <Form.Select onChange={handleOptionSelect} aria-label={'characters'}>
                                <option>Make a selection</option>
                                <option>Geralt of Rivia</option>
                                <option>Ciri</option>
                             </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='questType'>
                            <Form.Label>Quest Type:</Form.Label>
                            <Form.Select onChange={handleOptionSelect} aria-label={'type'}>
                                <option>Make a selection</option>
                                <CreateQuestDropdownItem quests={quests} attributeKey={'type'}/>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group  className='mb-3' controlId='questRegion'>
                            <Form.Label>Quest Region:</Form.Label>
                            <Form.Select onChange={handleRegionSelect}  aria-label={'region'}>
                                <option>Make a selection</option>
                                <RegionsDropdown regions={regionsList} attributeKey={'region'}/>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        { locations.length !== 0 ? 
                            <Form.Group className='mb-3' controlId='questLocation'>
                                <Form.Label>Quest Location:</Form.Label>
                                <Form.Select value={selectedLocation} onChange={handleOptionSelect} aria-label={'location'}>
                                    <option>Make a selection</option>
                                    <RegionsDropdown regions={locations}/>
                                </Form.Select>
                            </Form.Group> : null
                        }
                    </Col>
                </Row>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default CreateQuest;