import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className="card">
          <div className="content">
              <h3 className='card-number'>{props.number}</h3>
              <h4 className='card-heading' >{props.cardHeading}</h4>
              <p className='card-para' >{props.para}</p>
          </div>
        <div className="card-image" style={{backgroundImage: `url(${props.image})`}}></div>
      </div>
    </>
  )
}
