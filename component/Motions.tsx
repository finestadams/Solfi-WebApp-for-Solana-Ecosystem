import React from 'react'
import Image from 'next/image'

 const Motions = () => {
    return (
        <>
            <div className="">
                    <div className="d-flex jusstify-content-left align-items-center">
                    <div className="solar-system">
                        <div id="sun"></div>

                        <div className="orbit mercury-orbit"></div>
                        <div className="mercury-spin">
                            <div id="mercury">
                            <Image src="/images/red_star.png" alt="" width={50} height={50} />
                            <span style={{color: "white"}}>Tier1</span>
                            </div>
                        </div>

                        <div className="orbit venus-orbit"></div>
                        <div className="venus-spin">
                            <div id="venus">
                                <Image src="/images/blue_giant_star.png" alt="" width={50} height={50} />
                                <span style={{color: "white"}}>Tier2</span>
                            </div>
                        </div>

                        <div className="orbit earth-orbit"></div>
                        <div className="earth-spin position-relative">
                            <div className="orbit moon-orbit"></div>
                            <div className="moon-spin">
                            <div id="moon"></div>
                            </div>
                            <img id="earth" src="/images/purple_star.png" />
                            <span style={{color: "white"}}>Tier3</span>
                        </div>

                        <div className="orbit mars-orbit"></div>
                        <div className="mars-spin">
                            <div id="mars">
                                <Image src="/images/yellow_star.png" alt="" width={100} height={100} />
                                <span style={{color: "white"}}>Tier4</span>
                            </div>
                        </div>
                        </div>
                     
                    </div>
                  
                </div>
        </>
    )
}


export default Motions