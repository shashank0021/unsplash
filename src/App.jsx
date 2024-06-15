import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

const [img ,setimg]=useState("")
const [res,setres]=useState([])

async function fetchdata( query=''){
  const id ="YIcjX5lgY_ExAcJVedQbwSuKsLeRXxqzlLlT2FnWqQU"
  const url = query
    ? `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${id}`
    : `https://api.unsplash.com/photos/?client_id=${id}`;

const data= await fetch(url);
const response =  await data.json()
if(query)
  {
    setres(response.results)
  }
  else{
    setres(response)
  }  
}


useEffect(()=>{
  fetchdata()
},[])


function handelsearch(){
  fetchdata(img)

}

  return (
    <>
    <div className='input'>
      <h1>GeekImage</h1>
      <div>
      <input placeholder='enter your search' value={img} onChange={(e)=> setimg(e.target.value)}/>

      <button onClick={handelsearch}>Search</button>
      </div>

    </div>
    <div className="card">
    
      {res.map((e)=>{
        return(
          <div className='photo'>
                <img src={e.urls.small}/>
                </div>
              )
            })
      }
    
    </div>
    </>
  )
}

export default App