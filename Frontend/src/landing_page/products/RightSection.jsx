import React from 'react'

export default function RightSection({imageURL , productName , productDescription , learnMore}) {
  return (
    <div>
        <div className="container">
        <div className="row d-flex gap-5">
            <div className="col d-flex gap-3 flex-column justify-content-center">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a style={{textDecoration : "none"}} href={learnMore}>Learn More <i className="ms-2 fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

            <div className="col">
                <img src={imageURL} alt="IMAGE" />
            </div>

        </div>
      </div>
    </div>
  )
}
