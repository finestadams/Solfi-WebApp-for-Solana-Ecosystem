import React from 'react'
import Image from 'next/image'
import RellaxWrapper from 'react-rellax-wrapper'

const Explore = () => {
    return (
 
        <div className="explore_section" style={{backgroundImage: "url(/images/sky.png)",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "contain", width: "100%"}}>
          <div className="container">
            <div className="row text-center justify-content-center">
                <div className="row ">
                    <div className="col-sm-10 offset-sm-1 ">
                     
                        <h4 className="">EXPLORE A NEW WORLD</h4>
                       
                    </div>
                </div>
                <div className="paddingTop-50">
                   <Image src="/images/yellow_sun.png" alt="blue star" width={580} height={306}/>
                </div>
            </div>
          </div>
        </div>
       
    )
}

export  default Explore