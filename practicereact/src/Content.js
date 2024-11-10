import React from 'react'
import { useState } from 'react'
 

const Content = () => {


    function HandleNameChange(){
        const names =["Earn","grow","Give"];
        const int = Math.floor(Math.random()*3)
        return names[int]
      }
      const [count, setCount] = useState(99);

      function incrementFunction(){
        setCount((count)=> {return count + 1})
        setCount((count)=> {return count + 1})
        setCount((count)=> {return count + 1})
      }


  return (
    <div>
        <p>Let's {HandleNameChange()} Money</p>
        <button>Subscribe</button>
        <button >-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
    </div>
  )
}

export default Content