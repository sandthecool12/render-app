import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './Logo.jpg'
import './logo.css'

const Logo = () =>{
	return(
		<div className = 'ma4 mt0'>
			<Tilt className = 'Logo'>
      			<div className='br2 shadow-2'>
        			<img src={Brain} style={{paddingtop: '5px'}}alt = "logo" />
      			</div>
    		</Tilt>
		</div>
		)
}

export default Logo