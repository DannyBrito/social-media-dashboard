import React from 'react'
import SocialMediaCard from '../components/SocialMediaCard'
import {USER_SOCIAL_PAGES as DATA} from '../DATA'
import uuid from 'react-uuid'
const SocialMediaCardContainer = () =>{
    return (
        <div className="SocialMediaContainer">
            {DATA.map(element => <SocialMediaCard key={uuid()} {...element} />)}
        </div>
    )
}

export default SocialMediaCardContainer