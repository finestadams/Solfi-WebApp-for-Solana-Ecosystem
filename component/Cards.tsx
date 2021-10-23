import React from 'react'
import Image from 'next/image'

const Cards = () => {
    return (
        <div className="card_section">
          <div className="container px-4">
          <div className="row gx-5">
                <div className="col-sm-4" >
                    <div style={{backgroundImage: "url(/images/card_img.svg)"}} className="innerCard">
                        <div style={{maxWidth: "116px", maxHeight:"120px"}} className="marginBottom-50">
                            <Image src="/svg/decentra.svg" alt="bootstraing"  
                            width={169.37} height={115} 
                            layout='responsive'
                            />
                        </div>
                        <p className="cards-header">Decentralization</p>
                        <p className="cards-title">
                            Solana projects for all: the next Solana success won’t be funded 
                            by the few, but by the public.
                        </p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div style={{backgroundImage: "url(/images/card_img.svg)"}} className="innerCard">
                        <div style={{maxWidth: "116px", maxHeight:"120px"}} className="marginBottom-50">
                            <Image src="/images/Group.png" alt="bootstraing" width={169.37} height={115} layout='responsive'/>
                        </div>
                        <p className="cards-header">Democratization</p>
                        <p className="cards-title">
                        The opportunity for the Solana public to launch projects they want, with the level of support they deem.
                        </p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div style={{backgroundImage: "url(/images/card_img.svg)" }} className="innerCard">
                       <div style={{maxWidth: "116px", maxHeight:"120px"}} className="marginBottom-50 minus-m">
                            <Image src="/images/36.png" alt="bootstraing" width={169.37} height={115} layout='responsive' />
                       </div>
                        <p className="cards-header">Bootstrapping</p>
                        <p className="cards-title">
                        White label vesting, staking, and liquidity solutions for Solana startups to edge towards 
                        success.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export  default Cards