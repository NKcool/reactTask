import React from 'react'
import "styles/Banner.css"
import Bimg from "../images/pngwing.com.png"
export default function Banner() {
  return (
    <div className='Banner'>


        <div className='bannerText'>
            <h1>
                Get UpTo 50% Off On
                Sellected Clothings
            </h1>
            <dir className="bannerBtn">
                Buy Now
            </dir>
        </div>
        <div className='bannerimg'>
            <img src={Bimg} alt="" srcset="" />
        </div>


    </div>
  )
}
