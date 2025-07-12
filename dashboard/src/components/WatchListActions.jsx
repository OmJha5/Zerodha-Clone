import React from 'react'
import { Tooltip , Grow} from "@mui/material";
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import { MoreHoriz } from '@mui/icons-material';

export default function WatchListActions({uid}) {
  return (
    <span className="actions">
      <span>
        <Tooltip 
            title="Buy (B)"
            placement="top"
        >
            <button className='buy'>Buy</button>
        </Tooltip> 
      </span>  

      <span>
        <Tooltip 
            title="Sell (S)"
            placement="top"
        >
            <button className='sell'>Sell</button>
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


    </span>
  )
}
