import HeroBoxComponent from "./HeroBoxComponent";

const HeroesGridComponent = ({heroes}) =>{

  return (
    <div className="heroes-grid">
      { heroes.map((hero)=>(
          <HeroBoxComponent hero={hero}/>
      ))}            
    </div>
  )
}

export default HeroesGridComponent;