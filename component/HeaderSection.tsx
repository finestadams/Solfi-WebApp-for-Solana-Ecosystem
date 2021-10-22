import React from 'react'
import Image from 'next/image'
const HeaderSection = () => {
    return (
        <header 
        style={{backgroundImage: "url(/images/top-image.png)",
         backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: "100%", backgroundColor: "#0000"}}>
            <div className="container">
                <div className=" paddingTop-50">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                        <Image src="/images/SOLFI.png" alt ="logo" width={111} height={26}/>
                        </div>
                        <div className="">
                            <Image src="/svg/dots.svg" alt ="dots" width={170} height={68}  />
                        </div>
                    </div>
                </div>
                <div className="row paddingTop-50">
                    <div className="col-sm-6">
                       <p className="header-heading">The Decentralization Protocol for the Solana Ecosystem</p>
                       <p className="header-paragraph">
                           SolFi enables the Solana public to contribute to early stage
                           startups, giving the hidden stars an opportunity to rise, while
                           boosting the mutual success through bootstrapping solutions 
                           that enrich tokens.
                    </p>
                        <div className="paddingTop-30">
                            <a href="#" className="join-btn">Join waiting list</a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                         <Image 
                         className="vector-img"
                         src="/images/vector-solana.png" alt ="vector image" 
                        //  width= {1271}
                        //  height={737}
                         layout="fill"
                         objectFit="contain"
                         />
                    </div>
                </div>
                
                <div className="paddingTop-100 ">
                    <Image src="/svg/dots.svg" alt ="dots" width={170} height={68}  />
                </div>
            </div>
        </header>
    )
}


export default HeaderSection