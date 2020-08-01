import React from 'react'

const SocialMediaCard = ({logoSocialMedia,usermane,totalStat,typeStat,statReference,presentResult}) =>{
    return (
        <div className={`card socialMediaCard ${logoSocialMedia}Border`}>
            <div className="socialMediaHeaderInfo">
                <img alt="social media logo" className="logSocialMedia"src={`icon-${logoSocialMedia}.svg`} />
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
                <img alt="" className="statReference"src={`icon-${statReference}.svg`} />
                <span className={`presentResult ${statReference === 'up' ? 'greenOutcome' : 'redOutcome'}`}>{presentResult}</span>
            </div>
        </div>
    )
}

export default SocialMediaCard