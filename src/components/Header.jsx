import React from 'react'

 function Header() {
  return (
    <>
    <div className='header'>
        <div className='leftheader'>
            <div className="leftheaderimg">
                <img src="./images/toplogo.png" alt="" />
            </div>
            <h1>NEXT <span> Insurance</span></h1>
        </div>
        <div className='rightheader'>
            <ul>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>PAGES</li>
                <li>CONTACT</li>
                <li>PORTFOLIO</li>
            </ul>
            <button className="buttontop">Get Quote</button>
        </div>
    </div>
    </>
  )
}
export default Header;