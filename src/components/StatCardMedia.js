import React from 'react'

const StatCardMedia = ({typeStat,mediaLogo,totalAmount,outcomeRef,percentageRef}) =>{
    return (
        <div className="statMediaCard">
            <div className="statMediaHeader">
                <span className="typeStatHeader">{typeStat}</span>
                <img className="logoMediaStat" src={mediaLogo} alt="" />
            </div>
            <div className="countStats">
                <span className="typeStatHeader">{totalAmount}</span>
                <div className="percentageStatReference">
                    <img className="outcomeReference" alt="" src={outcomeRef} />
                    {percentageRef}
                </div>
            </div>
        </div>
    )
}

export default StatCardMedia