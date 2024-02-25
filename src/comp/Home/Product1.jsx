import React from 'react'
import "./Product1.css"

const Product1 = () => {
  return (
    <div className="home padding">

        <div className='product'>

            <div className="container">
                    <div className="category">
                        <h3>Categories</h3>
                    </div>

                <div className="big-box flex">

                    <div className="box">
                        <div className="image ">
                            <img src="./image/speaker.jpg" alt="" />
                        </div>
                        <div className="info">
                            <p>speaker</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image ">
                        <img src="./image/headphones.jpg" alt="" />
                        </div>
                        <div className="info">
                            <p>headphones</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image ">
                        <img src="./image/watch.jpg" alt="" />
                        </div>
                        <div className="info">
                        <p>watch</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image ">
                        <img src="./image/a screen.jpg" alt="" />
                        </div>
                        <div className="info">
                        <p>a screen</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image ">
                        <img src="./image/laptop.jpg" alt="" />
                        </div>
                        <div className="info">
                        <p>laptop</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Product1
