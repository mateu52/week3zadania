import React from 'react';


const EmploDetails = ({ details }) => {
    return (
        <div className="tabRight">
            <h3>Wiek: {details.age}</h3>
            <h3>Stanowisko: {details.job}</h3>
        </div>
    );
}

export default EmploDetails;