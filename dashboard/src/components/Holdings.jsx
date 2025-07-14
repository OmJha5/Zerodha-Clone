import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { HOLDING_API_ENDPOINT } from '../../utils/apiendpoint';

export default function Holdings() {

  let [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        let response = await axios.get(`${HOLDING_API_ENDPOINT}/allHoldings` , {withCredentials : true});
        
        if(response.data.success){
          setAllHoldings(response.data.allHoldings);
        }
      } 
      catch (error) {
        console.error('Failed to fetch holdings', error);
      }
    };

    fetchHoldings();
  }, []);

  return (
    <div>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, ind) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - (stock.avg * stock.qty) >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return <tr key={ind}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg?.toFixed(2)}</td>
              <td>{stock.price?.toFixed(2)}</td>
              <td>{currValue?.toFixed(2)}</td>
              <td className={profClass}>{(currValue - (stock.avg * stock.qty)).toFixed(2)}</td>
              <td className={profClass}>{stock.net}</td>
              <td className={dayClass}>{stock.day}</td>

            </tr>
          })}

        </table>
      </div>
      
    </div>
  )
}
