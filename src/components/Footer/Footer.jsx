import React from 'react'
import '../Footer/Footer.scss'
import logo from '../../assets/default.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>
                    © SW 2022 - 2023. Все права защищены.
                </p>
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer