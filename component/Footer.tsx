import React from 'react'
import Image from 'next/image'

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
                             <span>2021 SolFi</span><br/>
                             <span>All rights reserved.</span>
                         </div>
                    </div>
                    <div className=" footer-middle">
                        <a href="#">Tiers</a>
                        <a href="#">Roadmap</a>
                        <a href="#">Our Team</a>
                        <a href="#">Features</a>
                    </div>
                    <div className="follow">
                        <p>Follow us</p>
                        <div className="d-flex justify-content-start gap-3">
                        <a href="#"> <Image src="/images/facebook-footer.png" alt ="logo" width={40} height={40}/></a>
                        <a href="#"><Image src="/images/twitter-footer.png" alt ="logo" width={40} height={40}/></a>
                        <a href="#"><Image src="/images/instagram-footer.png" alt ="logo" width={40} height={40}/></a>
                        </div>
                        <div className="terms">
                             <a href="#" style={{paddingRight: "10px"}}>Privacy</a>
                             <a href="#">Terms & Conditions</a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Footer
