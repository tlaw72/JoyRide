import {useState} from 'react';
// import firestore from './firebase';
import firestore from '@react-native-firebase/firestore';


function App() {
const [name , setName] = useState();
const [age , setAge] = useState();
	
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

  firestore().collection('EmployeeCustomers').add({
    name: name,
    age: age,
  })
  .then(() => {
    console.log('User added!');
  }).catch(alert);

	// database.ref("user").set({
	// name : name,
	// age : age,
	// }).catch(alert);
}

return (
	<div className="App" style={{marginTop : 250}}>
	<center>
	<input placeholder="Enter your name" value={name}
	onChange={(e) => setName(e.target.value)}/>
	<br/><br/>
	<input placeholder="Enter your age" value={age}
	onChange={(e) => setAge(e.target.value)}/>
	<br/><br/>
	<button onClick={Push}>PUSH</button>
	</center>
	</div>
);
}

export default App;
