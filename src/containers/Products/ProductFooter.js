import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';


export default function ProductFooter(props) {
  const contextValue = useContext(UserContext);
  console.log(contextValue)
  return (
    <div>
      <p>{props.text}</p>
      <button>Buy</button>
    </div>
  )
}
