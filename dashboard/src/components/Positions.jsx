import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Positions() {

  let [allPosition , setAllPosition] = useState([]);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        let response = await axios.get("http://localhost:8080/allPositions");
        setAllPosition(response.data);
      } 
      catch (error) {
        console.error('Failed to fetch Positions', error);
      }
    };

    fetchPosition();
  }, []);

  return (
    <div>
      <h3 className="title">Positions ({allPosition.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPosition.map((stock, ind) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - (stock.avg * stock.qty) >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return <tr key={ind}>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td className={profClass}>{(currValue - (stock.avg * stock.qty)).toFixed(2)}</td>
              <td className={dayClass}>{stock.day}</td>

            </tr>
          })}

        </table>
      </div>
    </div>
  )
}
