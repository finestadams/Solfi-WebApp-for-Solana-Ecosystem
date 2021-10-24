import React from 'react'
import Image from 'next/image'

const Teams = () => {
    return (
        <section className="teams">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p>Our Teams</p>
                    </div>
                </div>
                <div style={{backgroundImage: "url(/images/teambg.png)",
                 backgroundRepeat: "no-repeat",  backgroundColor: "rgba(0, 0, 0, 1)",
                 backgroundSize: "100% 100%", width: "100%"}}>
                        <div className="team-container d-flex gap-3 justify-content-center align-items-center position-relative">
                            <div style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                                <Image src="/images/profile1.png" alt="profile" width={400} height={500} />
                            </div>
                            <div style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                                <Image src="/images/profile2.png" alt="profile" width={400} height={500} />
                            </div>
                            <div style={{backgroundImage: "url(/images/card_img.png)",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%"}}>
                                <Image src="/images/profile3.png" alt="profile" width={400} height={500} />
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Teams
