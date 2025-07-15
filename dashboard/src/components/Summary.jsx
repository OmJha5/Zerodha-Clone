import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { HOLDING_API_ENDPOINT } from '../../utils/apiendpoint'

export default function Summary() {
  let user = useSelector((state) => state.auth.user)
  let funds = useSelector((state) => state.funds.availableMargin)
  let [holding , setHolding] = useState({
    length : 0,
    investment : 0,
    currValue : 0
  })

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        let response = await axios.get(`${HOLDING_API_ENDPOINT}/allHoldings`, { withCredentials: true });

        if (response.data.success) {

          let allHoldings = response.data.allHoldings;

          let investment = 0 , currValue = 0;
          for(let hold of allHoldings){
            investment += (hold.qty * hold.avg);
            currValue += (hold.qty * hold.price);
          }

          setHolding({
            length : allHoldings.length,
            investment,
            currValue
          })
        }
      }
      catch (error) {
        console.error('Failed to fetch holdings', error);
      }
    };

    fetchHoldings();
  }, []);

  return (
    <div>
      <div className="username">
        <h6>Hi, <b>{user}</b> </h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{funds}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holding.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={holding.currValue > holding.investment ? "profit" : "loss"}>
              {(holding.currValue - holding.investment).toFixed(2)} <small>{(((holding.currValue - holding.investment) / holding.investment) * 100).toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{(holding.currValue).toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>₹{(holding.investment).toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  )
}
