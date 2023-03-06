import React, {useState, useEffect} from 'react'
import Loading from '../Loading/Loading'
import { getPopular } from "../../Services/axios.js";

const Home = () => {

  const [movies, setMovies] = useState(0)
    useEffect(()=> {
      const get = async () =>{
        const res = await getPopular()
        setMovies(res)
      }
     get()
    })
    if(!movies){
      return <Loading />
    }
  return (
    <>
    <div>{movies.data.results.map((k, index)=> <h2>{k.title}</h2>)}</div>
    </>
  )
}

export default Home