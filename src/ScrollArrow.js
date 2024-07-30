import React from 'react'
import './ScrollArrow.css'


export default function ScrollArrow(props) {
    const arrClass = 'arrow';    
    return (
        <div className="container">
            <div className={arrClass} ></div>
            <div className={arrClass} ></div>
            <div className={arrClass} ></div>
        </div>
    )
}
