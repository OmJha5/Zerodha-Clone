import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function AddFundsDialog({ open, onClose, onSubmit }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    onSubmit(amount);
    setAmount(''); 
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Add Funds</DialogTitle>
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
