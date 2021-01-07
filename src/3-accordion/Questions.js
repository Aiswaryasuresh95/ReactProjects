import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Question = ({title,info}) => {
   
    const [showinfo,setShow]=useState(false);

  return <article className="question">

      <header>
          <h4>{title}</h4>
         <button className='btn' onClick={() =>setShow(!showinfo)} >
             {showinfo? <AiOutlineMinus /> :< AiOutlinePlus />}
         </button>
         
      </header>
     {/* if show info is true then only display info */}
      {showinfo && <p>{info}</p>}
  </article>
  

};

export default Question;