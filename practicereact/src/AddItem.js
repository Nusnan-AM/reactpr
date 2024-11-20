import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItem = ({newItem, setnewItem, handleSubmit}) => {
    const inputRef =useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='ADD ITEM'
        value={newItem}
        onChange={(e) => setnewItem(e.target.value)}
        required
        />
        <button
        type='submit' 
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}

        > <FaPlus/></button>
    </form>
  )
}

export default AddItem