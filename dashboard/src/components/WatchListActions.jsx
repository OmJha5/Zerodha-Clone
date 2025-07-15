import React, { useState } from 'react'
import { Tooltip , Grow} from "@mui/material";
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import { MoreHoriz } from '@mui/icons-material';
import BuyDialog from './BuyDialog';
import SellDialog from './SellDialog';

export default function WatchListActions({stock}) {
  let [openBuy , setOpenBuy] = useState(false)
  let [openSell , setOpenSell] = useState(false)
  
  return (
    <span className="actions">
      <span>
        <Tooltip 
            title="Buy (B)"
            placement="top"
        >
            <button className='buy' onClick={() => setOpenBuy(true)}>Buy</button>
        </Tooltip> 
      </span>  

      <span>
        <Tooltip 
            title="Sell (S)"
            placement="top"
        >
            <button className='sell' onClick={() => setOpenSell(true)}>Sell</button>
        </Tooltip> 
      </span>  

      <span>
        <Tooltip 
            title="Analytics (A)"
            placement="top"
        >
            <button className='action'>
                <BarChartOutlined className="icon" />
            </button>

        </Tooltip> 
      </span>  

      <span>
        <Tooltip 
            title="More"
            placement="top"
        >
            <button className='action'>
                <MoreHoriz className='icon' /> 
            </button>

        </Tooltip> 
      </span>  

      {/* Dialog box when user clicks on buy button */}
      <BuyDialog open={openBuy} close={() => setOpenBuy(false)} stock={stock} /> 

      {/* Dialog box when user clicks on sell button */}
      <SellDialog open={openSell} close={() => setOpenSell(false)} stock={stock} /> 


    </span>
  )
}
