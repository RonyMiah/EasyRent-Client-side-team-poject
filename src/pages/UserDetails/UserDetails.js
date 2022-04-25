import { Button, Grid, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UserDetails = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleCar, setSingleCar] = useState({});
    useEffect(() => {
        fetch(`https://guarded-taiga-13015.herokuapp.com/api/car/${id}`)
            .then(res => res.json())
            .then(data => setSingleCar(data))
    }, [id]);
    const { brandName, model, imgUrl } = singleCar || {}
    const onSubmit = (data) => {
        if (singleCar) {
            data.carInfo = singleCar;
            axios.post('https://guarded-taiga-13015.herokuapp.com/api/userdetails', data)
                .then(data => {
                    if (data) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Car Rent Successfully',
                            showConfirmButton: true,
                            timer: 1500
                        })
                        navigate('/home')
                        reset();
                    }
                })
        }
        reset();
    };
    return (
        <div className='login-container'>
            <Typography className='login-header' variant="h4" gutterBottom component="div">
                Hey <span style={{ color: 'tomato' }}>{brandName} {model}</span> is waiting for your rental confirmation
            </Typography>
            <div className='login-grid'>
                <Grid container spacing={3} maxWidth="lg" justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img style={{ maxWidth: '100%' }} src={imgUrl} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} className='login-input' type="text" placeholder="Name" label="Name" variant="outlined" required /> <br />
                            <input className='login-input' type="number" placeholder="Number" label="Number" variant="outlined" required {...register("number")} /> <br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            {/* <Button type="submit" variant="contained" color="primary" onClick={handleClick} disabled={isFetching}>Login</Button> */}
                            <input type="submit" className="btn solid" />
                        </form>
                    </Grid>
                    <Button variant='contained' onClick={()=>navigate(-1)}>Go back</Button>
                </Grid>
            </div>
        </div>
    );
};

export default UserDetails;