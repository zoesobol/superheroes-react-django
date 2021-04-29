const HeroBoxComponent = ({hero}) =>{

  return (
    <div className="hero" key={hero.key}>
      <h2>{hero.name}</h2>
      <p>{hero.body}</p>
      <p>{hero.profile_pic}</p>
      <p>{hero.banner_pic}</p>
    </div>
  )
}

export default HeroBoxComponent;