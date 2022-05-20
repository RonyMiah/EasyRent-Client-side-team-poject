import React, { useEffect, useState } from 'react';
// import { Container} from "@mui/material";
// import Grid from '@mui/material/Grid';
import AllReviewCart from "./AllReviewCart";
import Swal from 'sweetalert2';
import './AllReview.css';

const AllReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/addreview')
      .then(res => res.json())
      .then(data => setReview(data));

  }, []);

  return (
    <div className='dashbord-review'>
<<<<<<< HEAD
      {/* <Container> */}
      <h2>All Users Review</h2>
      <div className="dashbord-review-cart">
=======
        {/* <Container> */}
        <h1>All Users Review</h1>
        <div className="dashbord-review-cart">
>>>>>>> development
        {/* <Grid container spacing={{ xs: 2, md: 3, lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid item xs={12} sm={6} md={4} lg={3}> */}

        {
          review.map((data) => <AllReviewCart
            key={data._id}
            reviewdata={data}
          ></AllReviewCart>)
        }

        {/* </Grid>
        </Grid> */}
      </div>
      {/* </Container> */}

    </div>
  )
}

export default AllReview