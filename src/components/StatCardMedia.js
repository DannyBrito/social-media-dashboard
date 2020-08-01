import React from 'react'

const StatCardMedia = ({typeStat,mediaLogo,totalAmount,outcomeRef,percentageRef}) =>{
    return (
        <div className="card statMediaCard">
            <div className="statMediaHeader">
                <span className="typeStatHeader">{typeStat}</span>
                <img className="logoMediaStat" src={mediaLogo} alt="" />
            </div>
            <div className="countStats">
                <span className="totalAmountStat">{totalAmount}</span>
                <div className={`percentageStatReference ${outcomeRef === 'up' ? 'greenOutcome' : 'redOutcome'}`}>
                    <img className="outcomeReference" alt="" src={`icon-${outcomeRef}.svg`} />
                    {percentageRef}
                </div>
            </div>
        </div>
    )
}

export default StatCardMedia