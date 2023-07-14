import React from 'react'
import Title from './Title'
import { servicecard } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"Our"} subTitle={'Services'}/>
      
      <div className="section-center services-center">
      {servicecard.map((card)=>{
        const {id,className,text,aboutText}=card;
        return( <article className="service" key={id}>
          <span className="service-icon"><i className={className}></i></span>
          <div className="service-info">
            <h4 className="service-title">{text}</h4>
            <p className="service-text">
              {aboutText}
            </p>
          </div>
        </article>

        )
      })};
      </div>
    </section>
  )
}

export default Services