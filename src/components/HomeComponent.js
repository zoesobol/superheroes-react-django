import { useState, useEffect } from 'react';
import HeroesGridComponent from "./HeroesGridComponent"
import useFetch from "../useFetch";

const HomeComponent = () =>{
  const {data:heroes, error, isPending} = useFetch("http://localhost:8000/superheroes/")


  return (
    <div className="heroes-grid">
      <h1>Home</h1>
      { isPending && <div>loading...</div>}
      { error && <div>{error} sdasd</div>}
      {heroes && <HeroesGridComponent heroes={heroes}/>}      
    </div>
  )
}

export default HomeComponent