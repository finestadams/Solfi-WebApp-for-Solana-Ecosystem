import React from 'react'
import Image from 'next/dist/client/image'
import { FaPlay } from "react-icons/fa";
const Player = () => {
    return (
        <>
        <div className="explore_section container" style={{backgroundImage: "url(/images/videobg.png)",
        backgroundRepeat: "no-repeat", 
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundSize: "100% 100%", width: "100%"}}>
            <div className="row text-center justify-content-center">
                <div className="">
                    <span className="play-circle">
                        <a href="#" className="playerBtn">
                            <FaPlay style={{color: "#186CDE"}} />
                        </a>
                    </span>
            </div>
          </div>
        </div>
        <div className=" marginArrow" style={{backgroundImage: "url(/images/greenline.png)",
        backgroundRepeat: "no-repeat", 
      
        backgroundSize: "100% 100%", width: "100%", height: "2px"}}>
          <div className="d-flex justify-content-between" style={{marginLeft: "auto", color: "#ffffff", position:"relative"}}>
             <div> </div><div> </div>
             <div className="circle-container">
                 <button className="circle"></button>
                 <p className="circle-q">Q2 2021</p>
             </div>
             <div className="circle-container">
                 <button className="circle"></button>
                 <p className="circle-q">Q2 2021</p>
             </div>
             <div className="circle-container">
                 <button className="circle"></button>
                 <p className="circle-q">Q2 2021</p>
                 <a href="#" className="show-on-hover" style={{backgroundImage: "url(/images/hoverimg.png)",
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "100% 100%"}}>
                        <p className="text-center">Seed Sale <br/> 
                        Timeline Creation<br/> 
                        Advisor Onboarding <br/>
                        Company Setup</p>
                 </a>
             </div>
             <div className="circle-container">
                <button className="circle"></button>
                <p className="circle-q">Q2 2021</p>
             </div>
             <div className="circle-container">
                <button className="circle"></button>
                <p className="circle-q">Q2 2021</p>
             </div>
             <div> </div> <div> </div>
          </div>
        </div>
        </>
    )
}

export default Player