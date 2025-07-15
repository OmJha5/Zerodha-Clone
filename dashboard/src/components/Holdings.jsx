import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { HOLDING_API_ENDPOINT } from '../../utils/apiendpoint';
import { VerticalChart } from './Chartjs/VerticalChart';
import { useDispatch, useSelector } from 'react-redux';
import { setHoldings } from '../redux/holdingSlice';

export default function Holdings() {
  let dispatch = useDispatch();
  let allHoldings = useSelector((state) => state.holding.holdings);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        let response = await axios.get(`${HOLDING_API_ENDPOINT}/allHoldings` , {withCredentials : true});
        
        if(response.data.success){
          dispatch(setHoldings(response.data.allHoldings));
        }
      } 
      catch (error) {
        console.error('Failed to fetch holdings', error);
      }
    };

    fetchHoldings();
  }, []);

  // Below is Chartjs code
  const labels = allHoldings.map((h) => h.name);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map((h) => h.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

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

          {allHoldings?.map((stock, ind) => {
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
              <td className={profClass}>{(currValue - oldValue)?.toFixed(2)}</td>
              <td className={profClass}>{(((currValue - oldValue) / oldValue) * 100)?.toFixed(2)}%</td>
              <td className={dayClass}>{(stock.day)?.toFixed(2)}%</td>

            </tr>
          })}

        </table>
      </div>

      <div className='p-5'>
        <VerticalChart data={data} />
      </div>
      
    </div>
  )
}
