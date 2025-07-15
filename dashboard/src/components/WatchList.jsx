import React, { useEffect, useState } from 'react'
import axios from "axios"
import WatchListItem from './WatchListItem';
import { STOCKS_API_ENDPOINT } from '../../utils/apiendpoint';
import { toast } from 'react-toastify';
import {DoughnutChart} from "./Chartjs/DoughnutChart"

export default function WatchList() {
  let [watchlist, setWatchList] = useState([]);

  useEffect(() => {

    let getAllStocks = async () => {
      try {
        let res = await axios.get(`${STOCKS_API_ENDPOINT}/allStocks`, { withCredentials: true })

        if (res.data.success) {
          setWatchList(res.data.allStocks)

        }
      }
      catch (e) {
        if (e?.response?.data?.message) {
          toast.error(e.response.data.message);
        }
        else toast.error("Internal Server Error!")
      }
    }

    getAllStocks();

  }, [])

  // Below is Chart js code
  let labels = watchlist.map((w) => w.symbol);

  const data = {
  labels,
  datasets: [
    {
      label: 'Curr Price',
      data: watchlist.map((w) => w.lastPrice),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="watchlist-container">

      <ul className="list">

        {watchlist.map((stock, ind) => {
          return <WatchListItem stock={stock} key={ind} />
        })}

      </ul>

      <DoughnutChart data={data} />
    </div>
  )
}
