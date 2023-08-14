import React from 'react'
import '../Protfolio_project/Protfolio_project.scss'
import maxway_cover from '../../assets/maxway_cover.jpg'
import orchidee_cover from '../../assets/orchidee_cover.png'
import { NavLink } from 'react-router-dom'

const Protfolio_project = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <div className="container">
                <h1>PORTFOLIO</h1>
                <ul>
                    <NavLink to='https://maxway-portfolio.netlify.app' className='project--1'>
                        <img src={maxway_cover} alt="" />
                        <span></span>
                        <strong>Max Way <p>fast food сайт</p></strong>
                    </NavLink>
                    <NavLink to='' className='project--2'>
                        <img src={orchidee_cover} alt="" />
                        <span></span>
                        <strong>Orchidee Pharm <p>Торговоя площадка</p></strong>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Protfolio_project