
import { accordion } from './data'
import AccordionBody from './AccordionBody'
import './Accordion.css'

const Accordion = () => {
  return (
    <article className="title">
        <h2>A Basic Accordion</h2>
  
        <section className="accordion-container">
        
            {
                accordion.map(({title,content})=>(
                    <AccordionBody title={title} content={content} key={(Math.random() *5).toFixed(1)}/>
                ))
            }

        </section>
    </article>
  )
}

export default Accordion