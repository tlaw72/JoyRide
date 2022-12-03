import React from 'react';
import './Center.css'

const OurForm = ({companyName, representativeName, representativeEmail, setCompanyName, setRepresentativeName, setRepresentativeEmail, Push}) => {
    return(
        <div className="Center">
        <br/><br/>
        <br/><br/>
        <p>Enter Company Details</p>
          <input placeholder="Company name" value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}/>
          <br/><br/>
          <input placeholder="Representative name" value={representativeName}
          onChange={(e) => setRepresentativeName(e.target.value)}/>
          <br/><br/>
          <input placeholder="Representative email" value={representativeEmail}
          onChange={(e) => setRepresentativeEmail(e.target.value)}/>
          <br/><br/>
          <button onClick={Push}>Submit</button>
      </div>
    )
}

export default OurForm;