import React from 'react'

export default function Awards() {
  return (
    <div>
        <div className="container mt-5 p-3">
          <div className="row p-3">
            <div className="col-6 p-5">
              <img src="media/images/largestBroker.svg" alt="Broker Image" />
            </div>

            <div className="col-6 p-5 mt-5">
              <h1 className='fs-2'>Largest stock broker in india</h1>
              <p className='mb-5 lh-lg'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>

              <div className="row">
                <div className="col-6">
                  <ul>
                    <li><p>Futures and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li>
                  </ul>
                </div>

                <div className="col-6">
                  <ul>
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and Govt. securities</p></li>
                  </ul>
                </div>
              </div>

              <img src="media/images/pressLogos.png" style={{width : "90%"}} />
            </div>
          </div>
        </div>
    </div>
  )
}
