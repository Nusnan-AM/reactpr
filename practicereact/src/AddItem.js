import React from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItem = ({newItem, setnewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='ADD ITEM'
        value={newItem}
        onChange={(e) => setnewItem(e.target.value)}
        required
        />
        <button
        type='button' 
        aria-label='Add Item'
        onClick={handleSubmit}

        > <FaPlus/></button>
    </form>
  )
}

export default AddItem