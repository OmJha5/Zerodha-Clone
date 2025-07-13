import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import useCheckUser from "../hooks/useCheckUser";
import { useEffect } from "react";
import { FUNDS_API_ENDPOINT } from "../../utils/apiendpoint";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFunds } from "../redux/fundSlice";

export default function Home() {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth.user);

  useCheckUser();

  useEffect(() => {

    if (user) {
      const viewFunds = async () => {
        try {
          let res = await axios.get(`${FUNDS_API_ENDPOINT}/viewfunds`, {
            withCredentials: true,
          });

          if (res.data.success) {
            dispatch(setFunds(res.data.availableMargin));
            return;
          }
        }
        catch (e) {
          console.log(e);
        }
      }

      viewFunds();
    }


  }, [user, dispatch]);

  return (
    <div className="home-layout">
      <TopBar />
      <Outlet /> {/* This is where the Dashboard will render */}
    </div>
  );
}
