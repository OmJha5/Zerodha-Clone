import React from 'react'

export default function Hero() {
  return (
    <div>
        <div className="container">
          <div className="row text-center border-bottom" style={{padding : "7rem"}}>
              <h1 className='fw-normal ' style={{fontSize : "3rem"}}>Zerodha Products</h1>
              <p className='my-3 fs-4'>Sleek, modern, and intuitive trading platforms</p>
              <p>Check out our <a style={{textDecoration : "none"}} href="#">investment offerings</a> →</p>
          </div>
        </div>
    </div>
  )
}
