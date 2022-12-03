import React from 'react';
import './Center.css'

const OurForm = ({name, age, setName, setAge, Push}) => {
    return(
        <div className="Center">
            <input placeholder="Enter your name" value={name}
            onChange={(e) => setName(e.target.value)}/>
            <br/><br/>
            <input placeholder="Enter your age" value={age}
            onChange={(e) => setAge(e.target.value)}/>
            <br/><br/>
            <button onClick={Push}>Submit</button>
        </div>
    )
}

export default OurForm;