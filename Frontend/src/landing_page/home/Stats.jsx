import React from 'react'

export default function Stats() {
  return (
    <div>
      <div className="container p-3">
        <div className="row p-3">
          <div className="col-6 p-5">
              <h1 className=' mb-5'>Trust with confidence</h1>

              <div>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted lh-lg'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
              </div>

              <div>
                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted lh-lg'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
              </div>

              <div>
                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted lh-lg'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              </div>

              <div>
                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted lh-lg'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
              </div>

          </div>
          <div className="col-6 p-5">
            <img className='mt-5' src="media/images/ecosystem.png" alt="Ecosystem Image" style={{width : "90%"}} />

            <div>
              <a style={{textDecoration : "none"}} className='mx-5 ' href="">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
              <a style={{textDecoration : "none"}} href="">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
