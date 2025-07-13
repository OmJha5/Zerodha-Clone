import React from 'react';
import Popover from '@mui/material/Popover';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_ENDPOINT } from '../../utils/apiendpoint';
import { setUser } from '../redux/authSlice';

export default function ProfilePopover() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth.user);

  const [anchorEl, setAnchorEl] = useState(null); // anchorE1 means who element jispe .profile class hai why we use it ? takki popOver ko pata ho ki kiske side mai open hona hai 

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget); // why not event.target ? because .target exact ko batayega par .currentTarget woh element ko refer karta hai jispe onClick laga hua hai 
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let logout = async() => {
      try{
          const res = await axios.get(`${USER_API_ENDPOINT}/logout` , {withCredentials : true});

          if(res.data.success){
            dispatch(setUser(null));
            navigate("/signin");
          }
      } 
      catch(e){
        console.log(e);
      }
  }

  const open = Boolean(anchorEl);

  return (
    <div>
      <div className="profile cursor-pointer flex flex-col items-center" onClick={handleOpen} >
        <div className="avatar bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center text-white">
          ZU
        </div>
        <p className="username text-sm mt-1">{user}</p>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
        }}
      >
        <Stack spacing={1} sx={{ p: 4 }}>
          {
            !user ? (
              <>
                <Button variant="contained" size="small" onClick={() => navigate("/signup")}>Sign Up</Button>
                <Button variant="outlined" size="small" onClick={() => navigate("/signin")}>Sign In</Button>
              </>
            ) : (
              <Button color="error" size="small" onClick={logout}>Logout</Button>
            )
          }
          
        </Stack>

        
      </Popover>
    </div>
  );
}
