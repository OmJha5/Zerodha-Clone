import React from 'react'

export default function Hero() {
  return (
    <div style={{backgroundColor : "#387ed1"}}>
      <div className="container p-5" style={{color : "white"}}>
        <div className="d-flex p-5 justify-content-between">
            <h1 className="fs-4">Support Portal</h1>
            <p><a style={{color : "white"}} href="#">Track Tickets</a></p>
        </div>

        <div className="row px-5 pb-5">
            <div className="col d-flex flex-column gap-2">
                <h1 className="fs-3 fw-normal">Search for an answer or browse help topics to create a ticket</h1>
                <input className='rounded border p-3' style={{width : "100%"}} type="text" placeholder='Eg. how do i activate F&O, why is my order getting rejected ...' />


            </div>
            <div className="col">
                <h1 className="fs-3 fw-normal">Featured</h1>
                <ol className="d-flex flex-column gap-2">
                    <li><a style={{color : "white" , fontSize : "18px"}} href="#">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                    <li><a style={{color : "white" , fontSize : "18px"}} href="#">Revision in expiry day of Index and Stock derivatives contracts</a></li>
                </ol>

            </div>
        </div>
      </div>
    </div>
  )
}
