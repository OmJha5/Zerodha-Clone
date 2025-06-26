import React from 'react'

export default function Team() {
  return (
    <div>
        <div className="container">
            <div className="row p-5">
                <h1 className="text-center">People</h1>
                <div className="col p-5 text-center">
                    <img style={{width : "60%"}} className='rounded-circle' src="media/images/nithinKamath.jpg" alt="Img" />
                    <h4 className="mt-3 fw-normal">Nithin Kamath</h4>
                    <h5 className='fs-6 text-muted mt-3'>Founder, CEO</h5>
                </div>
                <div className="col p-5 mt-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a style={{textDecoration : "none"}} href="#">Homepage</a> / <a style={{textDecoration : "none"}} href="#">TradingQnA</a> / <a style={{textDecoration : "none"}} href="#">Twitter</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
