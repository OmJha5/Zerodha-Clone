import React from 'react'

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#fbfbfb" }} className='border-top'>
      <div className="container p-3 mt-4">
        <div className="row p-3">
          <div className="col">
            <img src="media/images/logo.svg" alt="Logo" style={{ width: "50%" }} className=' mb-3' />
            <p>&copy; 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.</p>
          </div>
          <div className="col">
            <p className='fw-normal fs-5'>Company</p>

            <div className='d-flex flex-column'>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">About</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Philosophy</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Press & media</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Careers</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Zerodha Cares (CSR)</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Zerodha.tech</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Open source</a>
            </div>
          </div>
          <div className="col">
            <p className='fw-normal fs-5'>Support</p>

            <div className="d-flex flex-column">
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Contact us</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Support portal</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">How to file a complaint?</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Status of your complaints</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Bulletin</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Circular</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Z-Connect blog</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Downloads</a>
            </div>
          </div>
          <div className="col">
            <p className='fw-normal fs-5'>Account</p>

            <div className="d-flex flex-column">
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Open demat account</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Minor demat account</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">NRI demat account</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Commodity</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Dematerialisation</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Fund transfer</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">MTF</a>
              <a className=' mb-2 text-muted' style={{ textDecoration: "none", color: "black" }} href="">Referral program</a>
            </div>
          </div>
        </div>

        <div style={{ fontSize: "12px" }} className='mt-5 text-muted'>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
      </div>
    </div>
  )
}
