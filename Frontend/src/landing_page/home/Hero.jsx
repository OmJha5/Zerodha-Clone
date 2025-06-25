import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="container">
          <div className="row text-center">
              <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
              <h1>Invest in Everything</h1>
              <p style={{margin : "5px 0px 15px 0px"}}>Online platform in stocks, derivatives , mutual funds and more</p>
              <button className='p-2 btn btn-primary fs-7' style={{width : "17%" , margin : "0 auto"}}>Signup Now</button>
          </div>
      </div>

    </div>
  )
}
