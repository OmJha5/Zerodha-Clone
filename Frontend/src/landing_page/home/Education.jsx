import React from 'react'

export default function Education() {
  return (
    <div>
      <div className="container p-3">
        <div className="row p-3">
            <div className="col-6 px-5">
                <img src="media/images/education.svg" alt="" />
            </div>

            <div className="col-6 p-5">
              <h1 className="fs-2">Free and open market education</h1>
              <div className="mb-4">
                <p className="text-muted lh-lg">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a style={{textDecoration : "none"}} href="">Varcity <i class="fa-solid fa-arrow-right"></i></a>
              </div>

              <div>
                <p className="text-muted lh-lg">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a style={{textDecoration : "none"}} href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
