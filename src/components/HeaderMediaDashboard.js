import React from 'react'

const HeaderMediaDashboard = ({setlightTheme,lightTheme}) => (
    <div className="headerMediaDashboard">
        <div className="headerBox">
            <div className="titleHeader">
                Social Media Dashboard
            </div>
            <div className="totalStats">
                Total Followers: 23,004
            </div>
        </div>
        <div className="darkModeBox">
            <div className="darkModeTitle">
                Dark Mode
            </div>
            <div className="darkModeSwitchBox">
                <label className="switch">
                    <input type="checkbox" onChange={()=>setlightTheme(prev => !prev)} checked={lightTheme}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    </div>
)

export default HeaderMediaDashboard