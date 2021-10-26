import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Startup = () => {
    const [arrowClicked, setArrowClicked] = useState(1)

    const onClickArrow = () => {
        if(arrowClicked == 1){
            setArrowClicked(2)
        }
        if(arrowClicked == 2){
            setArrowClicked(1)
        }
        
    }
    return (
        <section id="startup">
        <div  className="startup-bg container  startups-container">
            <div className="start-upper">
            <div className="position-relative startup-cover">
               <div className="sp-content-container">
                    <div className="sp-first">
                        <div className="startup-padding">
                            {arrowClicked == 1 ? 
                            <div>
                                <h4>For Startup</h4>
                                <p>Distribute among thousands and acquire a major community 
                                from <br/>the get-go, without having to worry about the compliance or token<br/>
                                dispersion.
                                </p>
                                <p>Built-in KYC/AML compliance, for you. Ready to deploy staking & <br/>
                                    liquidity solutions. The Solana public, ready to address.
                                </p>
                            </div> 
                            : 
                            <div>
                                <h4>For Public</h4>
                                <p>Distribute among thousands and acquire a major community 
                                from <br/>the get-go, without having to worry about the compliance or token<br/>
                                dispersion.
                                </p>
                                <p>Built-in KYC/AML compliance, for you. Ready to deploy staking & <br/>
                                    liquidity solutions. The Solana public, ready to address.
                                </p>
                            </div>
                            }
                       </div>
                    </div>
                    <div className="sp-second">
                        <div className="learn-more">
                          <a href="#">Learn more</a>
                       </div>
                    </div>
                      <div className="sp-control-container-mobile">
                      <FaAngleLeft className={arrowClicked == 1 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow} />
                    <div className="px-4"></div>
                    <FaAngleRight className={arrowClicked == 2 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow} />
                  
                </div>
                </div>
                <div className="sp-control-container">
                    <FaAngleUp className={arrowClicked == 1 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow} />
                    <hr />
                    <FaAngleDown className={arrowClicked == 2 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow}/>
                </div>
               </div>
               <div className="start-bottom">
                    <span style={{fontWeight: "bold"}}>0{arrowClicked}/02</span>
               </div>
            </div>
            
        </div>
        
        </section>
    )
}

export default Startup 