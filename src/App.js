import {useState} from 'react';
import database from './firebase';
import Header from './Header';
import OurForm from './OurForm';
// import Center from './Center';

function App() {
const [companyName , setCompanyName] = useState();
const [representativeName , setRepresentativeName] = useState();
const [representativeEmail , setRepresentativeEmail] = useState();
	
// Push Function
const Push = () => {

	database.ref("user").set({
    companyName : companyName,
    representativeName : representativeName,
    representativeEmail: representativeEmail
	}).catch(alert);
}


return (
	<div>
    <Header/>
    <OurForm companyName={companyName} setCompanyName={setCompanyName} representativeName={representativeName} 
      setRepresentativeName={setRepresentativeName} representativeEmail={representativeEmail} 
      setRepresentativeEmail={setRepresentativeEmail} Push={Push}/>
	</div>
);
}

export default App;
