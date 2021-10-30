import React from 'react'
import Image from 'next/image'
import {Fade} from 'react-awesome-reveal'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <hr style={{color: "#FFFFFF"}}/>
                <div className="footer">
                <div className="footer-container">
                   <div className="footer-img">
                       
                         <Image src="/images/SOLFI.png" alt ="logo" width={111} height={26}/>
                     
                         <div className="all-right-reserve">
                             <Fade direction="up">
                                <span>2021 SolFi</span>
                                <span>All rights reserved.</span>
                             </Fade>                             
                         </div>
                    </div>
                    <Fade direction="up" cascade>
                        <div className=" footer-middle">
                            <AnchorLink href='#tiers'>Tiers</AnchorLink>
                            <AnchorLink href='#roadmap'>Roadmap</AnchorLink>
                            <AnchorLink href='#teams'>Team</AnchorLink>
                            <AnchorLink href='#features'>Features</AnchorLink>
                        </div>
                    </Fade>
                    <div className="follow">
                        <Fade direction="up">
                            <p>Follow us</p>
                        </Fade>
                        <div className="d-flex justify-content-start gap-3">
                           <Fade direction="up" cascade>
                            <a href="#"><Image src="/images/twitter-footer.png" alt ="logo" width={40} height={40}/></a>
                            <a href="#"><Image src="/images/telegram.png" alt ="logo" width={40} height={40}/></a>
                           </Fade>
                        </div>
                        <Fade direction="up">
                        <div className="terms">
                                <a href="#" style={{paddingRight: "10px"}}>Privacy</a>
                                <a href="#">Terms & Conditions</a>
                         </div>
                         </Fade>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Footer
