import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';
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
                            <div className="maxHeight">
                                <Fade direction="up">
                                    <h4>For Startup</h4>
                                    <p>Distribute among thousands and acquire a major community 
                                    from <br/>the get-go, without having to worry about the compliance or token<br/>
                                    dispersion.
                                    </p>
                                    <p>- Built-in KYC/AML compliance, for you. <br/>
                                        - Ready to deploy staking & 
                                        liquidity solutions.<br/>
                                        - The Solana public, ready to address.
                                    </p>
                                </Fade>
                            </div> 
                            : 
                            <div>
                                <Fade direction="up">
                                <h4>For Public</h4>
                                <p>Take your spot in Solana’s booming startups at early stages, 
                                    with the scouting and access executed on a single platform.
                                </p>
                                <p>- Tiered allocation system.<br/>
                                 - Staking rewards only a click away.<br/>
                                 - LP yields for early stage tokens.
                                </p>
                                
                                </Fade>
                            </div>
                            }
                       </div>
                     
                    </div>

                    <div className="sp-second">
                        <div className="learn-more">
                            <Fade direction="up">
                                 <a href="#">Learn more</a>
                          </Fade>
                       </div>
                    </div>
                      <div className="sp-control-container-mobile">
                      <FaAngleLeft className={arrowClicked == 1 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow} />
                    <div className="px-4"></div>
                    <FaAngleRight className={arrowClicked == 2 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow} />
                  
                </div>
                </div>
                <div className="sp-control-container">
                    <Fade direction="up">
                    <FaAngleUp className={arrowClicked == 1 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow} />
                    </Fade>
                    <hr />
                    <Fade direction="down">
                        <FaAngleDown className={arrowClicked == 2 ? `sparrow startup-no-color` : 'sparrow startup-color-white cursor-pointer'} onClick={onClickArrow}/>
                    </Fade>
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