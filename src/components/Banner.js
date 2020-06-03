import React from 'react';
import banner from '../assets/banner.png';

const Logo = () => {
    return <img  
        id="banner" 
        alt="myhomemenu"
        src={banner} 
        // height='300vh' 
        style={{ margin: '0 auto'}} 
    />
}

export default Logo;