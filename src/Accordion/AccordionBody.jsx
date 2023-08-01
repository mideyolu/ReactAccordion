import { useState } from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'

const AccordionBody = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    
      <div className="accordion-body">
            <div className="accordion-header">
                <h3>{title}</h3>
                <span onClick={()=> setIsActive(!isActive)} className='accordion-icon'>
                    {
                        isActive ? <FaMinus/> : <FaPlus/>

                    }
                </span>
            </div>

            <div className="content">
                {
                    isActive && <small>{content}</small>
                }
            </div>

      </div>
  )
}

export default AccordionBody;