import React from 'react';

const RegionsDropdown = ({regions}) => {
    const renderRegions = regions.map(region => <option key={region} value={region}>{region}</option> )
    return (
            <>
                {renderRegions}
            </>
    )
}

export default RegionsDropdown;