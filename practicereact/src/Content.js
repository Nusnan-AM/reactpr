import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = ({items,handleCheck, handleDelete}) => {

  return (
    <div>
      {(items.length) ? (
      <ul>
        {items.map(item => (
          <li className='item' key={item.id}>
            <input type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)}/>
            <label 
            style={(item.checked)? {textDecoration:'line-through'}: null}
            onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt role='button' onClick={() => handleDelete(item.id)}/>
          </li>
        ))}
      </ul>
      ) :(
        <h3>Your list is Empty</h3>
      )}
    </div>
  )
}

export default Content
