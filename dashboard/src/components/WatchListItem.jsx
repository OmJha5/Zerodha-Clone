import React, { useState } from 'react'

import {KeyboardArrowDown  , KeyboardArrowUp } from "@mui/icons-material";
import WatchListActions from './WatchListActions';

export default function WatchListItem({stock}) {
    const [showWatchListActions , setShowWatchListActions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowWatchListActions(true);
    }

    const handleMouseLeave = (e) => {
        setShowWatchListActions(false);
    }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
            <p className={stock.dayChange < 0 ? "down" : "up"}>{stock.name}</p>

            {
                !showWatchListActions && (
                    <div className="itemInfo d-flex gap-3">
                        <span className="percent">{stock.dayChange.toFixed(2)}</span>

                        {stock.dayChange < 0 ? <KeyboardArrowDown className='down' /> : <KeyboardArrowUp className='up'  />} 

                        <span className="price">{stock.lastPrice.toFixed(2)}</span>
                    </div>
                )
            }

        </div>

        {showWatchListActions && <WatchListActions stock={stock} />}
    </li>
  )
}
