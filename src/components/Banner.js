import React from 'react';
import banner from '../assets/banner.png';

const Logo = () => {
    return <img  
        id="banner" 
        alt="myhomemenu"
        src={banner} 
        // height='300vh' 
        style={{ margin: '0 auto', transition: '0.2s'}} 
    />
}

export default Logo;