import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Listitem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={item.id}>
    <input type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)}/>
    <label 
    style={(item.checked)? {textDecoration:'line-through'}: null}
    onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
    <FaTrashAlt role='button' onClick={() => handleDelete(item.id)}/>
  </li>
  )
}

export default Listitem