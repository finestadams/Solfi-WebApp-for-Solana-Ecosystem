import React from 'react'
import Image from 'next/image'
import RellaxWrapper from 'react-rellax-wrapper'
import {Fade} from 'react-awesome-reveal'

const Cards = () => {
    return (
       
        <div className="card_section">
            
          <div className="container ">
          <div className="row">
                <div className="col-sm-12 col-md-4" >
                    
                    <div style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}} className="innerCard">
                        <div  className="marginBottom-100">
                            <Fade direction="up">
                            <Image src="/images/decentralizatin_icon.svg" alt="bootstraing"  
                            width={169.37} height={106} 
                            />
                            </Fade>
                        </div>
                      <div className="marginBottom-100">
                      <Fade direction="up">
                            <p className="cards-header">Decentralization</p>
                      </Fade>
                      <Fade direction="up">
                        <p className="cards-title">
                            Solana projects for all: the next Solana success won’t be funded 
                            by the few, but by the public.
                        </p>
                        </Fade>
                      </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}} className="innerCard">
                        <div className="marginBottom-100">
                        <Fade direction="up">
                            <Image src="/images/Group.png" alt="bootstraing" 
                            width={169.37} height={106}/>
                        </Fade>
                        </div>
                       <div className="marginBottom-100">
                       <Fade direction="up">
                       <p className="cards-header">Democratization</p>
                       </Fade>
                       <Fade direction="up">
                        <p className="cards-title">
                        The opportunity for the Solana public to launch projects they want, with the level of support they deem.
                        </p>
                        </Fade>
                       </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}} className="innerCard">
                       <div className="marginBottom-100 minus-m">
                       <Fade direction="up">
                            <Image src="/images/36.png" alt="bootstraing" width={116.89} height={106} />
                        </Fade>
                       </div>
                        <div className="marginBottom-100">
                        <Fade direction="up">
                        <p className="cards-header">Bootstrapping</p>
                        </Fade>
                        <Fade direction="up">
                        <p className="cards-title">
                        White label vesting, staking, and liquidity solutions for Solana startups to edge towards 
                        success.
                        </p>
                        </Fade>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export  default Cards