import React from 'react'

const Startup = () => {
    return (
        <section className="startup-bg">
        <div className="container  startups-container">
          <div className="d-flex position-relative">
                <div className="startups-content">
                       <div className="startup-padding">
                        <h4>For Startup</h4>
                            <p>Distribute among thousands and acquire a major community 
                            from <br/>the get-go, without having to worry about the compliance or token<br/>
                            dispersion.
                            </p>
                            <p>Built-in KYC/AML compliance, for you. Ready to deploy staking & <br/>
                                liquidity solutions. The Solana public, ready to address.
                            </p>
                       </div>
                        <div className="learn-more">
                            <a href="#">Learn more</a>
                        </div>
                </div>
                <div className="startup-control d-flex justify-content-end align-items-center text-white ">
                        <div className="flex-column ">
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                        </div>
               </div>
            </div>
        </div>
        </section>
    )
}

export default Startup 