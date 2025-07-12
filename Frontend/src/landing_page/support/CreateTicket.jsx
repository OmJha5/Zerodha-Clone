import React from 'react'

export default function CreateTicket() {
  return (
    <div>
        <div className="container p-5">
            <div className="row p-5">
                <h1 className="text-muted fs-4">To create a ticket, select a relevant topic</h1>

                <div className="my-5 col-4 d-flex flex-column gap-2">
                    <p className='fs-5'><i class="fa-solid fa-plus"></i> Account Opening</p>
                    <div className="d-flex flex-column gap-2 px-4 lh-lg">
                        <a style={{textDecoration : "none"}} href="#">Resident individual</a>
                        <a style={{textDecoration : "none"}} href="#">Minor</a>
                        <a style={{textDecoration : "none"}} href="#">Non Resident Indian (NRI)</a>
                        <a style={{textDecoration : "none"}} href="#">Company, Partnership, HUF and LLP</a>
                        <a style={{textDecoration : "none"}} href="#">Glossary</a>
                    </div>
                </div>

                <div className="my-5 col-4 d-flex flex-column gap-2">
                    <p className='fs-5'><i class="fa-solid fa-user"></i> Your Zerodha Account</p>
                    <div className="d-flex flex-column gap-2 px-4 lh-lg">
                        <a style={{textDecoration : "none"}} href="#">Your Profile</a>
                        <a style={{textDecoration : "none"}} href="#">Account modification</a>
                        <a style={{textDecoration : "none"}} href="#">Client Master Report (CMR) and Depository Participant (DP)</a>
                        <a style={{textDecoration : "none"}} href="#">Nomination</a>
                        <a style={{textDecoration : "none"}} href="#">Transfer and conversion of securities</a>
                    </div>
                </div>

                <div className="my-5 col-4 d-flex flex-column gap-2">
                    <p className='fs-5'><i class="fa-solid fa-wallet"></i> Funds</p>
                    <div className="d-flex flex-column gap-2 px-4 lh-lg">
                        <a style={{textDecoration : "none"}} href="#">Add bank accounts</a>
                        <a style={{textDecoration : "none"}} href="#">Add Money</a>
                        <a style={{textDecoration : "none"}} href="#">Withdraw Money</a>
                        <a style={{textDecoration : "none"}} href="#">eMandates</a>
                    </div>
                </div>

                <div className="my-5 col-4 d-flex flex-column gap-2">
                    <p className='fs-5'><i class="fa-solid fa-dollar-sign"></i> Kite</p>
                    <div className="d-flex flex-column gap-2 px-4 lh-lg">
                        <a style={{textDecoration : "none"}} href="#">IPO</a>
                        <a style={{textDecoration : "none"}} href="#">Trading FAQs</a>
                        <a style={{textDecoration : "none"}} href="#">Margin Trading Facility (MTF) and Margins</a>
                        <a style={{textDecoration : "none"}} href="#">Alerts and Nudges</a>
                        <a style={{textDecoration : "none"}} href="#">Charts and orders</a>
                        <a style={{textDecoration : "none"}} href="#">General</a>
                    </div>
                </div>

                <div className="my-5 col-4 d-flex flex-column gap-2">
                    <p className='fs-5'><i class="fa-solid fa-coins"></i> Coin</p>
                    <div className="d-flex flex-column gap-2 px-4 lh-lg">
                        <a style={{textDecoration : "none"}} href="#">Mutual Funds</a>
                        <a style={{textDecoration : "none"}} href="#">National Pension Scheme (NPS)</a>
                        <a style={{textDecoration : "none"}} href="#">Features on Coin</a>
                        <a style={{textDecoration : "none"}} href="#">Payments and Orders</a>
                        <a style={{textDecoration : "none"}} href="#">General</a>
                    </div>
                </div>

                <div className="my-5 col-4 d-flex flex-column gap-2">
                    <p className='fs-5'><i class="fa-solid fa-plus"></i> Account Opening</p>
                    <div className="d-flex flex-column gap-2 px-4 lh-lg">
                        <a style={{textDecoration : "none"}} href="#">Resident individual</a>
                        <a style={{textDecoration : "none"}} href="#">Minor</a>
                        <a style={{textDecoration : "none"}} href="#">Non Resident Indian (NRI)</a>
                        <a style={{textDecoration : "none"}} href="#">Company, Partnership, HUF and LLP</a>
                        <a style={{textDecoration : "none"}} href="#">Glossary</a>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}
