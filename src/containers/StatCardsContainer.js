import React from 'react'
import StatCardMedia from '../components/StatCardMedia'
import { DAILY_STATS as DATA} from '../DATA'
import uuid from 'react-uuid'

const StatCardsContainer = () =>{
    return (
        <div className="StatMediaContainer">
            {DATA.map(element => <StatCardMedia key={uuid()} {...element} />)}
        </div>
    )
}

export default StatCardsContainer