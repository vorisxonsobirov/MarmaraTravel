import React from 'react'
import "../main.css"
import logo from "../../assets/Link.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <div className="links">
                        <Link to="/relaxCountry"><p>Страна отдыха</p></Link>
                        <Link to="/tikkets"><p>Авиа билеты</p></Link>
                        {/* <Link><p>Корзинка</p></Link> */}
                        <Link to="/contact"><p>Обратная связь</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
