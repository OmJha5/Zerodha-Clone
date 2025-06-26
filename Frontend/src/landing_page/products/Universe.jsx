import React from 'react'

export default function Universe() {
  return (
    <div>
      <div className="container">
        <div className="row p-5 text-center d-flex flex-column gap-5">
          <h1 className='text-normal'>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>

          <div className="row">
            <div className="col-4 d-flex flex-column gap-3 align-items-center">
              <img style={{ width: "50%" }} src="media/images/zerodhaFundhouse.png" alt="Image" />
              <p className="text-small text-muted">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            </div>

            <div className="col-4 d-flex flex-column gap-3 align-items-center">
              <img style={{ width: "55%" }} src="media/images/sensibullLogo.svg" alt="Image" />
              <p className="text-small text-muted">Options trading platform that lets you
                create strategies, analyze positions, and examine
                data points like open interest, FII/DII, and more.
              </p>
            </div>

            <div className="col-4 d-flex flex-column gap-3 align-items-center">
              <img style={{ width: "40%" }} src="media/images/streakLogo.png" alt="Image" />
              <p className="text-small text-muted">Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-4 d-flex flex-column gap-3 align-items-center">
              <img style={{ width: "50%" }} src="media/images/smallcaseLogo.png" alt="Image" />
              <p className="text-small text-muted">Thematic investing platform
                that helps you invest in diversified
                baskets of stocks on ETFs.</p>
            </div>

            <div className="col-4 d-flex flex-column gap-3 align-items-center">
              <img style={{ width: "50%" }} src="media/images/goldenpiLogo.png" alt="Image" />
              <p className="text-small text-muted">Options trading platform that lets you
                create strategies, analyze positions, and examine
                data points like open interest, FII/DII, and more.
              </p>
            </div>

            <div className="col-4 d-flex flex-column gap-3 align-items-center">
              <img style={{ width: "30%" }} src="media/images/dittoLogo.png" alt="Image" />
              <p className="text-small text-muted">Personalized advice on life
                and health insurance. No spam
                and no mis-selling.
                Sign up for free</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
