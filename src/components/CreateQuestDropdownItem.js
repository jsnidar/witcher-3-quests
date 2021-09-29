import React from 'react';

const CreateQuestDropdownItem = ({quests, attributeKey}) => {

    const uniqueValuesAtKey = () => {
        let values =  []
        
        if(attributeKey==="location" || attributeKey === 'characters') {
            quests.forEach(quest => quest[attributeKey].forEach(value => {
                const valueArr = value.split(', ')
                valueArr.forEach(val => {
                    if(!values.includes(val)){
                        return values.push(val)
                    }
                })
            }))
        }else{
            quests.forEach(quest => {
                if(!values.includes(quest[attributeKey]) && (quest[attributeKey] !== null)) {
                return values.push(quest[attributeKey])
            }
            })
        }
            
        if (attributeKey === 'level') {
            values.sort(function(a,b) {
              return a - b;
            })
          }else{
            values.sort(function(a, b) {
              const nameA = a.toUpperCase()
              const nameB = b.toUpperCase()
              if(nameA < nameB) {
                return -1
              }
              if(nameA > nameB) {
                return 1
              }
              return 0;
            });
          }
        return values.map(value => <option key={value} value={value}>{value}</option>)
    }

    return (
        <>
            {uniqueValuesAtKey()}
        </>
    )
}

export default CreateQuestDropdownItem;