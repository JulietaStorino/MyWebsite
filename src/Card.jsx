import pepe from './assets/pepe.jpg';
import Proptypes from 'prop-types'

function Card(props){

    return(
        <>
            <div className="card">
                <img className="card-img" src={props.img} alt={props.alt} border="0"></img>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.text}</p>
                <p className="card-text">{props.isLover ? "It loves papas" : "It not loves papas"}</p>
            </div>
            <div className="card">
                <img className="card-img" src={pepe} alt="pepe"></img>
                <h2 className="card-title">Pepe card</h2>
                <p className="card-text">This is a card component that loves pepe</p>
                <p className="card-text">It loves papas</p>
            </div>
        </>
    );
}

Card.propTypes = {
    img: Proptypes.string,
    alt: Proptypes.string,
    title: Proptypes.string,
    text: Proptypes.string,
    isLover: Proptypes.bool
}
export default Card;