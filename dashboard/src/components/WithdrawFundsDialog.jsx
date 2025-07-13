import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function WithdrawFundsDialog({ open, onClose, onSubmit }) {
  const [amount, setAmount] = useState('');
  let funds = useSelector((state) => state.funds.availableMargin)

  const handleSubmit = () => {
    if(amount > funds){
        toast.error("Your amount is greater then your available balance!")
    }
    else{
        onSubmit(amount);
        setAmount(''); 
        onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Withdraw Funds</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          autoFocus
          margin="dense"
          label="Enter Amount"
          type="number"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', mb: 1 }}>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
