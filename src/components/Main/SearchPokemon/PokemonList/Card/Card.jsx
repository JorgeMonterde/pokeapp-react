import React from "react";

//util functions
import { v4 as uuidv4 } from "uuid";


const Card = (props) => {
  const {info} = props;

  const printTypes = () => info.types.map(type => {
    let key1 = uuidv4();
    return <div className={`type ${type}`} key={key1}>{type}</div>
  })

  


  return (
    <article className="card">
      <div className="name-img">
        <p>{info.name}</p>
        <img src={info.img} alt={info.name}/>
      </div>
      <div className="info">
        <div className="type-info">{printTypes()}</div>
        <p>Height: {info.height} mh</p>
        <p>Weight: {info.weight} mw</p>
      </div>
    </article>
  );
};

export default Card;
