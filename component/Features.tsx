import React, { useState } from 'react'
import Image from 'next/image'
import RellaxWrapper from 'react-rellax-wrapper'
import {Fade} from 'react-awesome-reveal'

const Features = () => {

    const [isStake, setStake] = useState(false);
    const [isGamification, setGamification] = useState(true);
    const [isGovernance, setGovernance] = useState(false);

    const handleStake = () => {
        setStake(true)
        setGovernance(false)
        setGamification(false)
    }
    const handleGamification = () => {
        setStake(false)
        setGovernance(false)
        setGamification(true)
    }
    const handleGovernance = () => {
        setStake(false)
        setGovernance(true)
        setGamification(false)
    }
    return (
        <>
        <hr style={{color: "#ffffff", width: "70%", margin: "0 auto"}}/>
        <section className=" features" id="features">            
            <div className="container">
               <div className="community-container text-center">
               <div className="row ">
               
                    <div className="col-sm-12 ">
                        <Fade direction="up">
                            <h4>Community Features</h4>
                        </Fade>
                    </div>
             
                </div>
                <div className="row text-center">
                    <div className="col-sm-12 col-md-8 col-xs-12 offset-md-2">
                    <Fade direction="up">
                        <p>SolFi empowers the Solana public by giving the opportunity to make 
                            their ideas real and access contribution rounds to the next big thing on Solana.
                        </p>
                    </Fade>
                    </div>
                </div>
               </div>
                {/* <RellaxWrapper speed={4}> */}
                <div className="flex_ paddingBottom-100">
                    {isStake && (
                        <div className="wallpaper" style={{backgroundImage: "url(/images/wallpaperflare.png)",
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "75%"}}>
                           <div className="feature-content overlay">
                           <Fade direction="down">
                                   <h4>Staking Yield</h4>
                            </Fade>
                            <Fade direction="up">
                                   <p>
                                        SOFI staking offers long-term staking APY to deliver
                                         a growing stake to the strongest supporters.
                                   </p>
                            </Fade>
                           </div>
                       </div>
                    )}
                     {isGamification && (
                        <div className="wallpaper" style={{backgroundImage: "url(/images/wallpaperflare.png)",
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "75%"}}>
                           <div className="feature-content overlay">
                                <Fade direction="down">
                                   <h4>Gamification</h4>
                                </Fade>
                                <Fade direction="up">
                                   <p>
                                   SOFI staking is tiered across gamified ranks,
                                    providing a both intuitive and fun frame
                                    for sale participation.
                                   </p>
                                </Fade>
                           </div>
                       </div>
                    )}
                     {isGovernance && (
                        <div className="wallpaper" style={{backgroundImage: "url(/images/wallpaperflare.png)",
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "75%"}}>
                           <div className="feature-content overlay">
                                <Fade direction="down">
                                   <h4>Governance</h4>
                                </Fade>
                                <Fade direction="up">
                                   <p>The platform will grow
                                        towards community-centric
                                        functions, with the
                                        strongest supporters at the
                                        helm.
                                   </p>
                                </Fade>
                           </div>
                       </div>
                    )}
                    <div className="featureSide text-center">
                        <div className="stake" onClick={handleStake} 
                        style={{backgroundImage: isStake? 'url(/images/box.png)':'',
                        backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                            
                            <Image src="/images/card-icon.png" width={42} height={42} alt="icon"/>
                            <Fade direction="up">
                            <p>Staking Yield</p>
                            </Fade>
                        </div>
                        <div className="stake" onClick={handleGamification}
                        style={{backgroundImage: isGamification? 'url(/images/box.png)':'',
                        backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                            
                            <Image src="/images/card-icon.png" width={42} height={42} alt="icon"/>
                            <Fade direction="down">
                                <p>Gamification</p>
                            </Fade>
                        </div>
                        <div className="stake" onClick={handleGovernance}
                        style={{backgroundImage: isGovernance? 'url(/images/box.png)':'',
                        backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                           
                             <Image src="/images/card-icon.png" width={42} height={42} alt="icon"/>
                            
                             <Fade direction="up">
                            <p>Governance</p></Fade>
                        </div>
                    </div>
                </div>
              {/* </RellaxWrapper> */}
              
            </div>
        </section>
        </>
    )
}


export default Features