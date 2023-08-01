import React from 'react'
import Accordion from './Accordion/Accordion'
import { accordion } from './data'
const me = () => {
  return (

    <article className="accordion-content">
    <h4>A Basic Accordion</h4>

      <section className="accordion">
        
        {
          accordion.map(({title, content}, index)=>(
            <Accordion title={title} content={content} key={index} />

          ))
        };
      </section>

  </article>
  )
}

export default me