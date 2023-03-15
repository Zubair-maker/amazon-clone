import React from 'react'
import "./newnav.css";
import nav from "../images/nav.jpg"

const Newnav = () => {
  return (
    <div className='new_nav'>
         <div className="nav_data">
              <div className="left_data">
                 <span>All</span>
                 <span>Mobiles</span>
                 <span>BestSeller</span>
                 <span>Fasion</span>
                 <span>Customer Services</span>
                 <span>Electronics</span>
                 <span>Prime</span>
                 <span>Todays's deal</span>
                 <span>Amazon Pay</span>
              </div>
              <div className="right_data">
                 <img src={nav} alt="" />
              </div>
         </div>
    </div>
  )
}

export default Newnav
