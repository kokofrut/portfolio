import {useState, useEffect} from 'react'
import './header.css'
export default function Header(props) {
    useEffect(() => {
        // todo dropdown image after 3 seconds
    })
    return (
        <div className="header-wraper">
            <div className="header-photo">
                <img src="../src/assets/me.jpg" className="img-responsive animate__fadeInRight animate__animated"></img>
            </div>
        </div>
    )
}