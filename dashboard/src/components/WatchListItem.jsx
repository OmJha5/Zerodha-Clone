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
            <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

            {
                !showWatchListActions && (
                    <div className="itemInfo d-flex gap-3">
                        <span className="percent">{stock.percent}</span>

                        {stock.isDown ? <KeyboardArrowDown className='down' /> : <KeyboardArrowUp className='up'  />} 

                        <span className="price">{stock.price}</span>
                    </div>
                )
            }

        </div>

        {showWatchListActions && <WatchListActions uid={stock} />}
    </li>
  )
}
