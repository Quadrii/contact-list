import React, { useState, useEffect } from 'react';
import './App.css';
import Contact1 from './Contact1';
function App() {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jenny Han",
  //     email: "jenny.han@notreal.com",
  //     age: 25
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Paul Jones",
  //     email: "paul.jones@notreal.com",
  //     age: 33
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Peter Pan",
  //     email: "peterpan@neverland.com",
  //     age: 100
  //   }
  // ]

  const  [results, setResults] = useState([]);
  useEffect(()=> {
    fetch ("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
    console.log(data)
    setResults(data.results)
   });
  }, [])
  
  return (
    <div>
      {results.map((result, index) => {
        return (
          <Contact1 
          key = {index}
          avatarUrl={result.picture.large}
          name={result.name.first}
          email={result.email}
          age={result.dob.age}/>
        )
      })}

      {/* <Contact1 
        avatarUrl="https://via.placeholder.com/150"
        name="Jenny Han"
        email="jenny.han@notreal.com"
        age={25}/>
      <Contact1 
        avatarUrl="https://via.placeholder.com/150"
        name="Paul Jones"
        email="paul.jones@notreal.com"
        age={55}/>
      <Contact1 
        avatarUrl="https://via.placeholder.com/150"
        name="Peter Pan"
        email="peter.pan@neverland.com"
        age={100}/> */}
    </div>
    
  );
}

export default App;
