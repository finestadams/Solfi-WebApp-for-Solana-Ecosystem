import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import Reveal,{Fade} from "react-awesome-reveal";

const Player = () => {
    const [isActive, setActive] = useState(2);

    const handleFunc = () => {
        if (isActive >= 4){
            setActive(1)
        }
         else {
            setActive(isActive + 1)
        } 
    }

   setTimeout(handleFunc, 10000)

    const handleClick = (e: any) => {
        let whereClicked = e.target.value;
        if(whereClicked == 1){
            setActive(1)
           
        } else if(whereClicked == 2){
            setActive(2)
            
        } else if(whereClicked == 3){
            setActive(3)
          
        } else if(whereClicked == 4){
            setActive(4) 
        }
    }

    const customAnimation = keyframes`
        from {
            opacity: 0;
            transform: translate3d(-200px, -100px, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
        `;
    return (
       <>
        <Reveal keyframes={customAnimation}>
            <div className="explore_section container" style={{backgroundImage: "url(/images/videobg.png)",
            backgroundRepeat: "no-repeat", 
            backgroundSize: "100% 100%", width: "100%"}}>
                <div className="row text-center justify-content-center">
                    <div className="">
                        <span className="play-circle">
                            <a href="#" className="playerBtn">
                                <FaPlay  className="play-color" />
                            </a>
                        </span>
                </div>
            </div>
            </div>
        </Reveal>
        <Fade  direction="up">
        <section id="roadmap" className=" marginArrow" style={{backgroundImage: "url(/images/greenline.png)",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "100% 100%", width: "100%", height: "2px"}}>
          <div className="d-flex justify-content-between" style={{marginLeft: "auto", color: "#ffffff", position:"relative"}}>
             <div> </div><div> </div>
             <div className="circle-container">
                 <button className="circle" value="2" onClick={handleClick}></button>
                 <p className="circle-q">Q2 2021</p>
                 <a href="#" className={`show-on-hover ${isActive == 2 ? 'active':'inactive'}`} style={{backgroundImage: "url(/images/hoverimg.png)",
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "100% 100%"}}>
                        <p className="text-center">
                            - Research<br/>
                            - Product Design<br/>
                            - Team Formation
                         </p>
                 </a>
             </div>
             <div className="circle-container">
                 <button className="circle" value="3" onClick={(e)=>handleClick(e)}></button>
                 <p className="circle-q">Q3 2021</p>
                 <a href="#" className={`show-on-hover ${isActive == 3 ? 'active':'inactive'}`} style={{backgroundImage: "url(/images/hoverimg.png)",
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "100% 100%"}}>
                        <p className="text-center">
                            - Seed Sale<br/>
                            - Timeline Creation<br/>
                            - Advisor Onboarding<br/>
                            - Company Setup
                        </p>
                 </a>
             </div>
             <div className="circle-container">
                 <button className="circle" value="4" onClick={(e)=>handleClick(e)}></button>
                 <p className="circle-q">Q4 2021</p>
                 <a href="#" className={`show-on-hover ${isActive == 4 ? 'active':'inactive'}`} style={{backgroundImage: "url(/images/hoverimg.png)",
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "100% 100%"}}>
                        <p className="text-center">
                            - Private Sale<br/>
                            - Community Round<br/>
                            - Listing<br/>
                            - Launchpad Development
                        </p>
                 </a>
             </div>
             <div className="circle-container">
                <button className="circle" value="1" onClick={(e)=>handleClick(e)}></button>
                <p className="circle-q">Q1 2021</p>
                <a href="#" className={`show-on-hover ${isActive == 1 ? 'active':'inactive'}`} style={{backgroundImage: "url(/images/hoverimg.png)",
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "100% 100%"}}>
                        <p className="text-center">
                        - Partner Program<br/>
                        - White Label Services<br/>
                        - Development
                        </p>
                 </a>
             </div>
             <div> </div> <div> </div>
          </div>
        </section>
        </Fade>
        </>
    )
}

export default Player