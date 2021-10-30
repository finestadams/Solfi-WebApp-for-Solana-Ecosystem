import React from 'react'
import Image from 'next/image'
import {Fade} from 'react-awesome-reveal'
import Motions from './Motions'


const Explore = () => {
      
      return (
        <section id="tiers"  className="explore_section explore-img position-relative" style={{backgroundImage: "url(/images/sky.png)",
        backgroundRepeat: "no-repeat",backgroundAttachment:"fixed", minHeight: "100vh",
        backgroundSize: "cover", width: "100%"}}>
          <div  className="container">
            <div  className="row text-center justify-content-center">
                    <div className="col-sm-10 offset-sm-1 ">
                        <Fade direction="up">
                            <h4 className="">EXPLORE A NEW WORLD</h4>
                        </Fade>
                    </div>
            </div>
          
          </div>
          <Fade direction="up">
              <div  className="paddingTop-50" >  
                  {/* <Image className = "weather" src="/images/yellow_sun.png" alt="blue star" width={580} height={306}/>
                  <div className="bgFloor"></div> */}
                  <Motions  />
              </div>
            </Fade>
        </section>
       
    )
}

export  default Explore