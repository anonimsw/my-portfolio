import React from 'react'
import '../Header/Header.scss'
import About_me from '../../fragment/About_me/About_me'
import Protfolio_project from '../../fragment/Protfolio_project/Protfolio_project'
import Skills from '../../fragment/Skills/Skills'
import Services from '../../fragment/Services/Services'

const Header = () => {
    return (
        <header>
            <Skills />
            <About_me  />
            <Protfolio_project />
            <Services />
        </header>
    )
}

export default Header