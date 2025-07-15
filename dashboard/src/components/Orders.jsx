import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { ORDER_API_ENDPOINT } from '../../utils/apiendpoint';
import { setOrders } from '../redux/orderSlice';
import {useDispatch, useSelector} from "react-redux"

export default function Holdings() {
  let dispatch = useDispatch();
  let allOrders = useSelector((state) => state.order.orders);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let response = await axios.get(`${ORDER_API_ENDPOINT}/allOrders`, { withCredentials: true });

        if (response.data.success) {
          dispatch(setOrders(response.data.allOrders));
        }
      }
      catch (e) {
        if (e?.response?.data?.message) {
          toast.error(e.response.data.message);
        }
        else toast.error("Internal Server Error!")
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, ind) => {

            return <tr key={ind}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price?.toFixed(2)}</td>
              {
                (stock.mode == "Buy") ? (
                  <td className='fs-6'  style={{color : "green"}}>{stock.mode}</td>
                ) : (
                  <td className='fs-6'  style={{color : "red"}}>{stock.mode}</td>
                )
              }
            </tr>
          })}

        </table>
      </div>

    </div>
  )
}
