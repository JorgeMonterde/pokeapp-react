import React from "react";
//util functions
import {v4 as uuidv4} from "uuid";
import { firstLetterToUppercase } from "../../../../utils/handleData";


const RequiredCard = (props) => {
  const {info} = props;

  const requiredInfo = info[0];

  const printTypes = () => requiredInfo.types.map(type => {
    let key1 = uuidv4();
    let typeName = type.type.name;
    return <div className={`type ${typeName}`} key={key1}>{typeName}</div>
  })


  return (
    <article className="required-card" >
      <div className="name-img">
        <div className="name-id">
          <h3>{firstLetterToUppercase(requiredInfo.name)}</h3>
          <p>#{requiredInfo.id}</p>
        </div>
        <img src={requiredInfo.sprites.other["official-artwork"].front_default} alt={requiredInfo.name}/>
      </div>
      <div className="info">
        <div className="type-info">{printTypes()}</div>
        <p>Height: {requiredInfo.height} mh</p>
        <p>Weight: {requiredInfo.weight} mw</p>
      </div>
    </article>
  );
};

export default RequiredCard;
