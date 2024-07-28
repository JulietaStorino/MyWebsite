import Proptypes from 'prop-types'

function Card(props){
  return(
    <>
      <div className="card">
        <img className="card-img" src={props.img} alt={props.alt} border="0"></img>
        <div className="card-text">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.text}</p>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  img: Proptypes.string,
  alt: Proptypes.string,
  title: Proptypes.string,
  text: Proptypes.string,
}

function Proyects() {
  return (
    <div className="Proyects">
      <h1><span>PROYECTS</span><br/>A selection of stuff I've Built</h1>
      <div className="cards">
        <Card img="https://pngimg.es/d/dog_PNG2449.png" alt="Little diggie that looks like negrita" title="Nigga card" text="In process"/>
        <Card img="https://upload.wikimedia.org/wikipedia/commons/b/b7/Edificio_FAMAF_%28UNC%29.jpg" alt="FaMAF picture" title="Man I Love FaMAF" text="In process"/>
        <Card img="https://pngimg.es/d/dog_PNG2449.png" alt="Little diggie that looks like negrita" title="Nigga card" text="In process"/>
        <Card img="https://upload.wikimedia.org/wikipedia/commons/b/b7/Edificio_FAMAF_%28UNC%29.jpg" alt="FaMAF picture" title="Man I Love FaMAF" text="In process"/>
      </div>
    </div>
  );
}

export default Proyects;