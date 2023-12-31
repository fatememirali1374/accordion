import React, { Children, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
const data=[
    {
id:1,
title:"Accordion 1",
text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ex reiciendis. Neque iste, atque ex totam sit quo mollitia excepturi blanditiis. Est quasi error recusandae."
},
{
    id:2,
    title:"Accordion 2",
    text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ex reiciendis. Neque iste, atque ex totam sit quo mollitia excepturi blanditiis. Est quasi error recusandae."
    },
    {
        id:3,
        title:"Accordion 3",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ex reiciendis. Neque iste, atque ex totam sit quo mollitia excepturi blanditiis. Est quasi error recusandae."
        },
]

function Accordion() {
    const [open,setOpen]=useState(null)
  return (
    <div className='accordion'>
     {data.map((item)=>
   
        <AccordionItem open={open} setOpen={setOpen} key={item.id} id={item.id} title={item.title}>
            {item.text}</AccordionItem>
     )} 
        
        
        </div>
  )
}

export default Accordion;

const AccordionItem=({id,title,open,setOpen,children})=>{
    const isOpen=id===open
    return(
        <div className={`accordion-item ${isOpen ? "accordion__expanded":""}`}>
        <div onClick={()=>setOpen(id===open?null:id)} className="accordion-item__header">
        {title}<ChevronDownIcon
        className='accordion-item__chevron'
        // style={{ width: "1.2rem",
        //     height: "1.2rem",
        //     transition: "all 0.3s ease-out",
        //     rotate:isOpen? "180deg":"0deg"}}
            /></div>
        <div className="accordion-item__content">
        {children}</div>
       {/* {isOpen && <div className="accordion-item__content">
        {item.text}</div>} */}
        </div>
    )
}