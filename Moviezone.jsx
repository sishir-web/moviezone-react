import React, { useEffect, useState } from 'react'
import {movies} from './data.js'
import './Moviezone.css'

const Moviezone = () => {
  const[moviez, setMoviez]=useState(movies);
      // useEffect(() => {
      //   setMoviez(movies.filter(movies=>movies))

      // }, [movies]);
      const HandleChange=(parameter)=>{
        setMoviez(movies.filter(movies=>movies.category==parameter))
      }
  return (
    <div >
      <div style={{display:"flex", justifyContent:"center", marginBottom:"35px", gap:"30px"}}>
<button type="button"  onClick={()=>setMoviez(movies.filter(movies=>movies))}>MovieZone</button>
<button type="button" class="btn btn-outline-danger" onClick={()=>HandleChange("Action")} >Action</button>
<button type="button" class="btn btn-outline-secondary" onClick={()=>HandleChange("Animation")}    >Animation</button>
<button type="button" class="btn btn-outline-success"   onClick={()=>HandleChange("Thriller")}   >Thriller</button>
<button type="button" class="btn btn-outline-warning"   onClick={()=>HandleChange("Sci-Fi")}   >sci-fi</button>
<button type="button" class="btn btn-outline-info"      onClick={()=>HandleChange("Drama")}  >Drama</button>
<button type="button" class="btn btn-outline-primary"      onClick={()=>HandleChange("Horror")}  >Horror</button>
</div>
    <div style={{
        display:"flex",
         justifyContent:"center",
          alignItems:"center",
            flexWrap:"wrap",
            width:"1200px",
            alignSelf:"center",
            justifySelf:"center",
        }}>
    {moviez.map((data)=>(
        <div key={data.id} className='jpt' style={{margin:"25px",maxHeight:"350px"}} >
           <img src={data.backdrop_path} style={{height:"300px", width:"350px", border:"2px solid grey",
            borderRadius:"10px",
           }}></img>
           <h5 className='overlay' style={{maxWidth:"350px", textAlign:"center"}}>{data.title}</h5>
           <p style={{maxWidth:"350px", textAlign:"center"}}>{data.release_date}</p>
           </div>
    ))}
    </div>

    </div>
  )
}

export default Moviezone
