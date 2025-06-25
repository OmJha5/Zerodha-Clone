import React from 'react'

export default function Pricing() {
  return (
    <div>
      <div className="container p-3">
        <div className="row p-3">
          <div className="col-5 p-5">
            <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
            <p className='lh-lg'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a style={{textDecoration : "none"}} href="">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="col-1"></div>

          <div className="col-6 p-5">
            <div className="row text-center">
              <div className="col p-2 border">
                  <h1>&#8377;0</h1>
                  <p>Free Equity delivery and <br /> direct mutual Funds</p>
              </div>

              <div className="col p-2 border">
                  <h1>&#8377;20</h1>
                  <p>Free Equity delivery and <br /> direct mutual Funds</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
