import React from 'react'

const SocialMediaCard = ({logoSocialMediaSrc,usermane,totalStat,typeStat,statReference,presentResult}) =>{
    return (
        <div className="socialMediaCard">
            <div className="socialMediaHeaderInfo">
                <img alt="social media logo" className="logSocialMedia"src={logoSocialMediaSrc} />
                <span className="username">{usermane}</span>
            </div>
            <div className="amountBox">
                <div className="numberStat">
                    {totalStat}
                </div>
                <div className="typeStat">
                    {typeStat}
                </div>  
            </div>
            <div className="referenceStat">
                <img alt="" className="statReference"src={statReference} />
                <span className="presentResult">{presentResult}</span>
            </div>
        </div>
    )
}

export default SocialMediaCard