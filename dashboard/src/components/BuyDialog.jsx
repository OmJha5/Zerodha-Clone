import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';
import axios from 'axios';
import { STOCKS_API_ENDPOINT } from '../../utils/apiendpoint';
import { setFunds } from '../redux/fundSlice';
import { setOrders } from '../redux/orderSlice';
import { setHoldings } from '../redux/holdingSlice';

export default function BuyDialog({ open, close, stock }) {
    let dispatch = useDispatch();
    let funds = useSelector((state) => state.funds.availableMargin)

    let [input, setInput] = useState({
        qty: 0,
        amount: 0
    })

    let handleSubmit = async () => {
        if (funds > (input.qty * input.amount)) {
            try {
                let res = await axios.post(`${STOCKS_API_ENDPOINT}/buyStock` , {stock , qty : input.qty , amount : input.amount , funds} , {
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    withCredentials : true
                })

                if(res.data.success){
                    dispatch(setFunds(res.data.availableMargin))
                    dispatch(setOrders(res.data.allOrders));
                    dispatch(setHoldings(res.data.allHoldings));
                    toast.success(res.data.message)
                    close(); 
                }
            }
            catch (e) {
                if (e?.response?.data?.message) {
                    toast.error(e.response.data.message);
                }
                else toast.error("Internal Server Error!")
            }
        }
        else {
            toast.error("You don't have sufficient funds!")
        }
    }

    return (
        <Dialog open={open} onClose={close} maxWidth="xs" fullWidth>
            <DialogTitle>Buying Stock</DialogTitle>
            <DialogContent sx={{ display: 'flex', alignItems: 'center', gap: "20px" }}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Enter Quatity"
                    type="number"
                    name="qty"
                    variant="outlined"
                    value={input.qty}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    label="Enter Amount"
                    type="number"
                    variant="outlined"
                    name="amount"
                    value={input.amount}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    fullWidth
                />
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', mb: 1 }}>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}
