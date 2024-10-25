import React from 'react'
import './Offeres.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offeres = () => {
    return (
        <div className='offeres'>
        <div className="offeres-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button> Check Now</button>

        </div>
        <div className="offeres-right">
        <img src={exclusive_image} alt="" />

        </div>
        </div>
    )
    }

export default Offeres
