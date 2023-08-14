import React from 'react'
import '../Nav/Nav.scss'
import logo from '../../assets/default.svg'
import 'react-modern-drawer/dist/index.css'
import Drawer from 'react-modern-drawer'
const Nav = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <>
            <nav>
                <div className="container">
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='right'
                        className='bla bla bla--bars'
                    >
                        <div className="x--mark" onClick={toggleDrawer}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                        </div>
                        <li>
                            <a href="#portfolio">Мои проекты</a>
                            <a href="#me" >Обо мне</a>
                            <a href="#work">Услуги</a>
                        </li>
                        <a href="tel:+998909516535"> Мой номер:<br /><span>+998 (90) 951-65-35</span></a>
                    </Drawer>
                    <div className="bars--block">
                        <svg className='bars' onClick={toggleDrawer} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </div>
                    <ul>
                        <a href="#me" >Обо мне</a>
                        <a href="#portfolio">Мои проекты</a>
                        <a href="#work">Услуги</a>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Nav