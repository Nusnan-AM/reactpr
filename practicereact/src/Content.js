import React from 'react'

import Itemlist from './Itemlist'

const Content = ({items,handleCheck, handleDelete}) => {

  return (
    <div>
      {(items.length) ? (
        <Itemlist
        items = {items}
        handleCheck = {handleCheck}
        handleDelete ={handleDelete}
        />
      ) :(
        <h3>Your list is Empty</h3>
      )}
    </div>
  )
}

export default Content
