import React from 'react';
import Checkbox from '../Checkbox';

const ExpansionsListBase = (props: any) => {
  const renderExpansions = (expansions: any) => {
    return expansions.map( (expansion: any) => (
      <li key={expansion.id}>
        <Checkbox id={expansion.id} label={expansion.name} />
      </li>
      
    ))
  }
  return(
    <ul className={props.className}>
      {renderExpansions(props.expansions)}
    </ul>
  )
}

export default ExpansionsListBase;