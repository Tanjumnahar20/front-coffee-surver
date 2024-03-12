
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Card from './components/Card/Card';

function App() {
  const coffees = useLoaderData();

  return (
    <div className='m-20'>
      
      <h1 className='text-6xl my-20'>Coffee server is running:{coffees.length}</h1>
      <div className='grid lg:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <Card
           key={coffee._id}
           coffee={coffee}
        ></Card>)
      }
      </div>
      
    </div>
  )
}

export default App
