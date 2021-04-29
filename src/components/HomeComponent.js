import { useState, useEffect } from 'react';
import HeroesGridComponent from "./HeroesGridComponent"

const HomeComponent = () =>{
  const [heroes, setHeroes] = useState([
    {
      name:"name1",
      body:"body1",
      profile_pic:"url_profile_pic_1",
      banner_pic:"url_banner_1",
      id:1
    },
    {name:"name2",body:"body2",profile_pic:"url_profile_pic_2", banner_pic:"url_banner_2",id:2},
    {name:"name3",body:"body3",profile_pic:"url_profile_pic_3", banner_pic:"url_banner_3",id:3}
  ]);

  return (
    <div className="heroes-grid">
      <h1>Home</h1>
      <HeroesGridComponent heroes={heroes}/>
    </div>
  )
}

export default HomeComponent