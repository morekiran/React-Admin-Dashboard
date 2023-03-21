import React from 'react'
import "./WidgetSm.css"
import {MdVisibility} from "react-icons/md"

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://yohohindi.com/wp-content/uploads/2022/08/22-girls-dp-yohohindi.com_.jpeg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kiran More</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButn">
            <MdVisibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://mylovinggifts.in/wp-content/uploads/2022/11/Untitled-design-2022-11-22T114017.778.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nikita Dasgude</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButn">
            <MdVisibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-75-1024x1003.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shree Kale</span>
            <span className="widgetSmUserTitle">Mechanic Engineer</span>
          </div>
          <button className="widgetSmButn">
            <MdVisibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeXTJfcamvo84GWoChdMHCmWeunbZ429n6ZfAjt1rV65hForOBAe4DXsqT2M_kYqXeo4&usqp=CAU" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ankita Mule</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButn">
            <MdVisibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://www.imagediamond.com/blog/wp-content/uploads/2019/11/whatsapp-dp-for-boys4.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Suraj Satav</span>
            <span className="widgetSmUserTitle">Electrical Engineer</span>
          </div>
          <button className="widgetSmButn">
            <MdVisibility className='widgetSmIcon'/>
            Display
          </button>
        </li>

      </ul>
    </div>
  )
}

export default WidgetSm