import React from 'react'
import '../styles/Home.css'
import Product from './Product'

function Home() {
    return (
        <div>
            <div className="home">
                <img className="home-image" src="https://portaleltoro.com/wp-content/uploads/2018/05/AMAZON-1200x537-2400x1524_c.png" alt="" />
            </div>
            <Product />
            <div></div>
        </div>
    )
}

export default Home
