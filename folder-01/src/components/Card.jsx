import React from 'react'

import {Bookmark}  from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
        {/* top */}
        
        <div className='top'>

          <img src={props.company_icon}></img>
          <button>Save  <Bookmark /> </button>

        </div>

        {/* center */}

        <div className='center'>
         <h2>{props.name} <span>6 days ago</span> </h2>
         <h1> {props.position}</h1>
         <div className='tag'>
            <div className='tag1'>
                {props.tag1}
            </div>
             <div className='tag1'>
                {props.tag2}
            </div>
         </div>
        </div>

    {/*bottom */}
        <div className='bottom'>
            
            <div className='left'>
                <h2>{props.price}</h2>
                 <p>{props.location}</p>
            </div>

          <button>ApplyNow</button>
            

        </div>

    </div>
  )
}

export default Card
