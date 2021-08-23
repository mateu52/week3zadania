import React, {useState} from 'react';
import EmploDetails from './EmploDetails';



const Employees = ({ data }) => {
    const [details, setDetails]= useState("");

    const On_click= (e) => {
        let index = parseInt(e.target.id, 10);
        const activePerson = data.filter((person) => person.id === index);
        setDetails(activePerson[0].details);
    };
    return(
        <div className="tab">
            <div className="tabLeft">
                {data.map((person) => (
                    <h2 key={person.id} onClick={On_click}>{person.name} {person.surname}</h2>
                ))}
            </div>
            <EmploDetails details={details} />
        </div>
    );
}

export default Employees;