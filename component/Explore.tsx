import React from 'react'
import Image from 'next/image'
import RellaxWrapper from 'react-rellax-wrapper'
import {Fade} from 'react-awesome-reveal'

const Explore = () => {
    return (
 
        <div className="explore_section" style={{backgroundImage: "url(/images/sky.png)",
        backgroundRepeat: "no-repeat",backgroundAttachment:"fixed", minHeight: "100vh",
        backgroundSize: "contain", width: "100%"}}>
          <div className="container">
            <div className="row text-center justify-content-center">
                <div className="row ">
                    <div className="col-sm-10 offset-sm-1 ">
                        <Fade direction="up">
                             <h4 className="">EXPLORE A NEW WORLD</h4>
                        </Fade>
                    </div>
                </div>
                <div className="paddingTop-50">
                    <Fade direction="up">
                         <Image src="/images/yellow_sun.png" alt="blue star" width={580} height={306}/>
                   </Fade>
                </div>
            </div>
          </div>
        </div>
       
    )
}

export  default Explore