import React from "react";

const Item = (props) => {

  const {name, img, deleteItem} = props;


  return (
    <div className="new-pokemon-card">
      <p>{name}</p>
      <img src={img} alt={name} />
      <button onClick={deleteItem}>Borrar</button>
    </div>
  
  );
};

export default Item;
