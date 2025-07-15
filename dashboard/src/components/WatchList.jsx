import React, { useEffect, useState } from 'react'
import axios from "axios"
import WatchListItem from './WatchListItem';
import { STOCKS_API_ENDPOINT } from '../../utils/apiendpoint';
import { toast } from 'react-toastify';

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

  return (
    <div className="watchlist-container">

      <ul className="list">

        {watchlist.map((stock, ind) => {
          return <WatchListItem stock={stock} key={ind} />
        })}

      </ul>
    </div>
  )
}
