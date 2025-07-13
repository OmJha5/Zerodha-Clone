import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddFundsDialog from './AddFundsDialog';
import { FUNDS_API_ENDPOINT } from "../../utils/apiendpoint";
import axios from "axios";
import { setFunds } from '../redux/fundSlice';
import WithdrawFundsDialog from './WithdrawFundsDialog';

export default function Funds() {
  let dispatch = useDispatch();
  let availableMargin = useSelector((state) => state.funds.availableMargin);
  let [openAdd, setOpenAdd] = useState(false);
  let [openWith, setOpenWith] = useState(false);

  let handleAddSubmit = async (amount) => {
    try {
      let res = await axios.post(`${FUNDS_API_ENDPOINT}/addfunds`, { fund: amount } , {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      if(res.data.success){
        dispatch(setFunds(res.data.availableMargin))
      }

    }
    catch{
      console.log(e);
    }
  }

  let handleWithSubmit = async (amount) => {
    try {
      let res = await axios.post(`${FUNDS_API_ENDPOINT}/withdrawfunds`, { fund: amount } , {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      if(res.data.success){
        dispatch(setFunds(res.data.availableMargin))
      }

    }
    catch{
      console.log(e);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow rounded p-3">
        <h5 className="mb-3">Funds Summary</h5>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item d-flex justify-content-between">
            <span>Available Margin</span>
            <strong>₹ {availableMargin.toFixed(2)}</strong>
          </li>
        </ul>
        <div className="d-flex gap-2">
          <button className="btn btn-success flex-fill" onClick={() => setOpenAdd(true)}>Add Funds</button>

          <AddFundsDialog
            open={openAdd}
            onClose={() => setOpenAdd(false)}
            onSubmit={handleAddSubmit}
          />

          <button className="btn btn-danger flex-fill" onClick={() => setOpenWith(true)}>Withdraw Funds</button>

          <WithdrawFundsDialog
            open={openWith}
            onClose={() => setOpenWith(false)}
            onSubmit={handleWithSubmit}
          />
        </div>
      </div>
    </div>
  )
}
