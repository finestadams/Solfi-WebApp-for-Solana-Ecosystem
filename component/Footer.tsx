import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <hr style={{color: "#FFFFFF"}}/>
                <div className="row d-flex footer-container">
                   <div className=" col-sm-4 footer-img">
                         <Image src="/images/SOLFI.png" alt ="logo" width={111} height={26}/>
                         <div style={{paddingTop: "30px", fontSize: "12px", color: "white"}}>
                             <span>2021 SolFi</span><br/>
                             <span>All rights reserved.</span>
                         </div>
                    </div>
                    <div className="col-sm-4">
                        <a href="#">Tiers</a>
                        <a href="#">Roadmap</a>
                        <a href="#">Our Team</a>
                        <a href="#">Features</a>
                    </div>
                    <div className=" col-sm-4">
                        <p style={{padding: "0", margin: "0"}}>Follow us</p>
                        <a href="#"> <Image src="/images/facebook.png" alt ="logo" width={14} height={14}/></a>
                        <a><Image src="/images/twitter.png" alt ="logo" width={14} height={14}/></a>
 
                        <div  style={{paddingTop: "15px", fontSize: "12px", color: "white"}}>
                             <span style={{paddingRight: "10px"}}>Privacy</span>
                             <span>Terms & Conditions</span>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
