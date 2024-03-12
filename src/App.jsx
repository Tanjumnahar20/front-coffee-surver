
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Card from './components/Card/Card';
import { useState } from 'react';

function App() {
  const loadedCoffee = useLoaderData();
  const [ coffees,setCoffee] = useState(loadedCoffee);

  return (
    <div className='m-20'>
      
      <h1 className='text-6xl my-20'>Coffee server is running:{coffees.length}</h1>
      <div className='grid lg:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <Card
           key={coffee._id}
           coffee={coffee}
           coffees={coffees}
           setCoffee={setCoffee}
        ></Card>)
      }
      </div>
      
    </div>
  )
}

export default App
