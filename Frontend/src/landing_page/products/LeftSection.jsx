import React from 'react'

export default function LeftSection({imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}) {
  return (
    <div>
      <div className="container">
        <div className="row p-5 d-flex gap-5">
            <div className="col">
                <img src={imageURL} alt="IMAGE" />
            </div>
            <div className="col p-5 d-flex gap-3 flex-column">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className="d-flex gap-3 mb-3">
                    <a style={{textDecoration : "none"}} href={tryDemo}>Try Demo <i className="ms-2 fa-solid fa-arrow-right"></i></a>
                    <a style={{textDecoration : "none"}} href={learnMore}>Learn More <i className="ms-2 fa-solid fa-arrow-right"></i></a>
                </div>

                <div className="d-flex gap-3">
                    <a style={{textDecoration : "none"}} href={googlePlay}> <img src="media/images/googlePlayBadge.svg" alt="" /> </a>
                    <a style={{textDecoration : "none"}} href={appStore}> <img src="media/images/appstoreBadge.svg" alt="" /> </a>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
