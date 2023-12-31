import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userProfileAction } from '../../Redux/Actoins/userAction';
// import CardElement from '../../Components/CardElement';

const UserJobsHistory = () => {
    // const { user } = useSelector(state => state.userProfile)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(userProfileAction()); 
    }, [])

  return (
    <>
        <Box>
            <Typography variant='h4' sx={{ color:"black" }}> Jobs History</Typography>
            {/* <Box>
                {
                    user && UserJobsHistory.map((history, i) => {
                        <CardElement 
                            key={i}
                            id={history._id}
                            jobTitle={history.title}
                            description={history.description}
                            category=''
                            location={history.location}
                        />
                    })
                }
            </Box> */}
        </Box>
    </>
  )
}

export default UserJobsHistory
