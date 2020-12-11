import React from 'react'
import './Header.scss'
import deskDark from '../../static/bg-desktop-dark.jpg'
import mobLight from '../../static/bg-mobile-light.jpg'

function Header() {
    return (
        <div className="header">
            <div className="header_image">
                <picture>
                    <source srcSet={`${mobLight} 1x`} media="(max-width: 899px)" />
                    <img
                        srcSet={`${deskDark} 2x`}
                        alt="ImageHeader"
                    />
                </picture>
            </div>
            <div className="header_head">
                <h2>Todo</h2>
            </div>
        </div>
    )
}

export default Header
