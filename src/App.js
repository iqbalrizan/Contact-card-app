
import { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import './index.css';


function App() {
  const [results, setResults] = useState([]);



  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResults(data.results)
    });
  }, [])

  

  

  

  

  
  

  

  




  return (
    <div className="App">

      {results.map((result, index) => {
        return(
<ContactCard key={index} 
avatarUrl={result.picture.large}
     nama={result.name.first}
     jenisKelamin={result.cell}
     umur={result.dob.age}
     email={result.email}
     />
        )
      }
      )}
     
     
    </div>
  );
}

export default App;
