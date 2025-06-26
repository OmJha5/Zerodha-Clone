import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="container text-center">
          <div className="row text-center" style={{padding : "8rem"}}>
            <h1 className='fw-normal'>Charges</h1>
            <p className='fs-4 text-muted'>List of all charges and taxes</p>
          </div>

          <div className="row">
            <div className="col-4 p-5 d-flex flex-column gap-2">
                <img className='ms-5' style={{width : "80%"}} src="media/images/pricingEquity.svg" alt="" />
                <h1 className='fs-3'>Free equity delivery</h1>
                <p className='text-muted lh-lg'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>

             <div className="col-4 p-5 d-flex flex-column gap-2">
                <img className='ms-5' style={{width : "80%"}} src="media/images/intradayTrades.svg" alt="" />
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                <p className='text-muted lh-lg'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>

            <div className="col-4 p-5 d-flex flex-column gap-2">
                <img className='ms-5' style={{width : "80%"}} src="media/images/pricingEquity.svg" alt="" />
                <h1 className='fs-3'>Free direct MF</h1>
                <p className='text-muted lh-lg'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div> 
          </div>

      </div>
    </div>
  )
}
