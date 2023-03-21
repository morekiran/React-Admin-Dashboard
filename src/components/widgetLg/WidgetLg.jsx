import React from 'react'
import "./WidgetLg.css"

const WidgetLg = () => {

const Button = ({type})=>{
  return <button className={'widgetLgButn ' + type}>{type}</button>
}

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://www.trickscity.com/wp-content/uploads/2017/04/handsome-boy-dp-download.jpg" alt="" className="widgetLgImg" />
             <span className="widgetLgName">Sunil Jadhav</span>
          </td>
          <td className="widgetLgData">2 Jan 2021</td>
          <td className="widgetLgAmt">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://politic365.com/wp-content/uploads/2020/04/cute-whatsapp-dp-girl-298x300.jpg" alt="" className="widgetLgImg" />
             <span className="widgetLgName">Neha Ohol</span>
          </td>
          <td className="widgetLgData">2 Jan 2021</td>
          <td className="widgetLgAmt">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://loveshayariimages.in/wp-content/uploads/2022/10/attractive-whatsapp-dp.jpg" alt="" className="widgetLgImg" />
             <span className="widgetLgName">Vijay Chore</span>
          </td>
          <td className="widgetLgData">2 Jan 2021</td>
          <td className="widgetLgAmt">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://hindimarathisms.com/wp-content/uploads/2022/02/Cute-Girl-DP.jpg" alt="" className="widgetLgImg" />
             <span className="widgetLgName">Kalyani More</span>
          </td>
          <td className="widgetLgData">2 Jan 2021</td>
          <td className="widgetLgAmt">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>

      </table>
    </div>
  )
}

export default WidgetLg