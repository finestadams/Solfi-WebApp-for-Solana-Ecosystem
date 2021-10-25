import React from 'react'
import Image from 'next/image'

const Features = () => {
    return (
        <div className=" features">
           <hr style={{color: "#ffffff", width: "70%", margin: "0 auto"}}/>
            <div className="container">
               <div className="community-container text-center">
               <div className="row ">
                    <div className="col-sm-12 ">
                        <h4>Community Features</h4>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-12 col-md-8 col-xs-12 offset-md-2">
                        <p>SolFi empowers the Solana public by giving the opportunity to make 
                            their ideas real and access contribution rounds to the next big thing on Solana.
                        </p>
                    </div>
                </div>
               </div>
                <div className="flex_ paddingBottom-100">
                    <div className="wallpaper" style={{backgroundImage: "url(/images/wallpaperflare.png)",
                     backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "75%"}}>
                        <div className="feature-content overlay">
                                <h4>Gamification</h4>
                                <p>SOFI staking is tiered across gamified ranks, 
                                    providing a both intuitive and fun frame for sale participation.
                                </p>
                        </div>
                    </div>
                    <div className="featureSide text-center">
                        <div className="stake">
                            <Image src="/images/card-icon.png" width={42} height={42} alt="icon"/>
                            <p>Staking Yield</p>
                        </div>
                        <div className="stake">
                            <Image src="/images/card-icon.png" width={42} height={42} alt="icon"/>
                            <p>Gamification</p>
                        </div>
                        <div className="stake">
                            <Image src="/images/card-icon.png" width={42} height={42} alt="icon"/>
                            <p>Governance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Features