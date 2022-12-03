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

  // firestore().collection('EmployeeCustomers')
  // .doc(String(name)).set({
  //   // name: name,
  //   age: age,
  // })
  // .then(() => {
  //   console.log('User added!');
  // }).catch(alert);

  // firestore().collection('EmployeeCustomers').add({
  //   name: name,
  //   age: age,
  // })
  // .then(() => {
  //   console.log('User added!');
  // }).catch(alert);

	database.ref("user").set({
    companyName : companyName,
    representativeName : representativeName,
    representativeEmail: representativeEmail
	}).catch(alert);
}


const OurForm = () => {
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

return (
	<div>
    <Header/>
    <OurForm/>
	</div>
);
}

export default App;
