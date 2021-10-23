import React from 'react'
import Image from 'next/image'

const Explore = () => {
    return (
        <div className="explore_section" style={{backgroundImage: "url(/images/sky.png)",
        backgroundRepeat: "no-repeat", 
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundSize: "100% 100%", width: "100%"}}>
          <div className="container">
            <div className="row text-center justify-content-center">
                <div className="row ">
                    <div className="col-sm-10 offset-sm-1 ">
                        <h4>EXPLORE A NEW WORLD</h4>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export  default Explore