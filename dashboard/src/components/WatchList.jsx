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
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">

        {watchlist.map((stock, ind) => {
          return <WatchListItem stock={stock} key={ind} />
        })}

      </ul>
    </div>
  )
}
