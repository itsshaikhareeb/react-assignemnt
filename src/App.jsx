import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  const [count, setCount] = useState(1);
  const [photos, setPhotos] = useState([]);
   useEffect(()=>{
        fetch(` https://api.thecatapi.com/v1/images/search`)
      .then((res) => res.json())
      .then((data)=>{
        console.log(data);
        setPhotos(data);
      });
    },[count]);
    
    function image(){
      
        setCount(count +1)
  }
   

  return (
    <>
    <h1>Cat Image App</h1>
    <div>
      <div className='buttons' >
      <button onClick={image} > Generate Cat image</button>
      </div>
      
        <div className='images' >

        {photos.map((photo)=>(
          <img key={photo.id} className='single'
          src={photo.url}
          />
        ))}
        </div>
    </div>
    
    </>
  )

}

export default App
