import React from 'react'
import "./FeaturedInfo.css"
import{ImArrowDown2,ImArrowUp2}from "react-icons/im"

const FeaturedInfo = () => {
  return (
    <div className='featured'>

        <div className="FeaturedItem">
         <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4 <ImArrowDown2 className='featuredIcon negative'/></span>
        </div>
             <span className="featuredSub">Compared to last month</span> 
        </div>
        
        <div className="FeaturedItem">
         <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">-1.4 <ImArrowDown2 className='featuredIcon negative'/></span>
        </div>
             <span className="featuredSub">Compared to last month</span> 
        </div>

        <div className="FeaturedItem">
         <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">+2.4 <ImArrowUp2 className='featuredIcon'/></span>
        </div>
             <span className="featuredSub">Compared to last month</span> 
        </div>

    </div>
  )
}

export default FeaturedInfo