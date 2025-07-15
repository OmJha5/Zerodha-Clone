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
            <th>currPrice</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, ind) => {
            const currValue = stock.price * stock.qty;
            const oldValue = stock.avg * stock.qty;
            const isProfit = currValue - (stock.avg * stock.qty) >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.day < 0 ? "loss" : "profit";

            return <tr key={ind}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg?.toFixed(2)}</td>
              <td>{stock.price?.toFixed(2)}</td>
              <td className={profClass}>{(currValue - oldValue).toFixed(2)}</td>
              <td className={profClass}>{(((currValue - oldValue) / oldValue) * 100).toFixed(2)}%</td>
              <td className={dayClass}>{(stock.day).toFixed(2)}%</td>

            </tr>
          })}

        </table>
      </div>
      
    </div>
  )
}
