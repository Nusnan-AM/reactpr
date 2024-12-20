import React from 'react'

import Listitem from './Listitem'

const Itemlist = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map(item => (
        <Listitem
        item = {item}
        key={item.id}
        handleCheck ={handleCheck}
        handleDelete = {handleDelete}
        />
    ))}
  </ul>
  )
}

export default Itemlist