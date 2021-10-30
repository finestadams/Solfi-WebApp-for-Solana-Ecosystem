import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import RellaxWrapper from 'react-rellax-wrapper'
import { Fade } from "react-awesome-reveal";

const HeaderSection = () => {

    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    //   }, []);

    return (
        <header 
        
        style={{backgroundImage: "url(/images/top-image.png)",
         backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%", backgroundColor: "#0000"}}>
            <div className="container">
                <div className=" paddingTop-50">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <Fade direction="left">
                                <RellaxWrapper speed={7} >
                                    <Image src="/images/SOLFI.png" alt ="logo" width={111} height={26}/>
                                </RellaxWrapper>
                            </Fade>
                        </div>
                        <div className="">
                            <Fade direction="right">
                                <RellaxWrapper speed={7} >
                                    <Image src="/svg/dots.svg" alt ="dots" width={170} height={68}  />
                                </RellaxWrapper>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="row paddingTop-50"  >
                    <div className="col-sm-12 col-xs-12 col-md-5">
                     <Fade direction="up" delay={4}>
                      <RellaxWrapper speed={5}>
                        <p className="header-heading">The Decentralization Protocol for the Solana Ecosystem</p>
                        </RellaxWrapper>
                      </Fade>
                      <Fade direction="up" delay={3} >
                        <RellaxWrapper speed={4}>
                            <p className="header-paragraph">
                                SolFi enables the Solana public to contribute to early stage
                                startups, giving the hidden stars an opportunity to rise, while
                                boosting the mutual success through bootstrapping solutions 
                                that enrich tokens.
                            </p>
                        </RellaxWrapper>
                    </Fade>
                    <div className="">
                    <div className="paddingTop-20 ">
                        <Fade direction="left">
                        <RellaxWrapper speed={3}>
                            <a href="#" className="join-btn">Join waiting list</a>
                        </RellaxWrapper>
                        </Fade>
                    </div>
                    </div>
                    </div>
                
                   <div className="col-sm-12 col-md-7 col-xs-12">
                   <Fade direction="up">
                    <RellaxWrapper speed={2}>
                            <Image 
                            className=""
                            src="/images/vector-solana.png" alt ="vector image" 
                            width= {1271}
                            height={737}
                            />
                        </RellaxWrapper>
                    </Fade>
                    </div>
              
                </div>
                <div className="paddingTop-50  paddingBottom-50">
                    <Fade direction="up">
                        <RellaxWrapper speed={1}><Image src="/svg/dots.svg" alt ="dots" width={170} height={68}  /></RellaxWrapper>
                    </Fade>
                    {/* <div className="position-line">
                    <Image src="/images/line.png" alt ="dots" width={170} height={68}  />
                    </div> */}
                </div>
            </div>
        </header>
    )
}


export default HeaderSection