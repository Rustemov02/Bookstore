import React, { Component } from 'react';
import Slider from 'react-slick'

import './bestSelling.css'
import data from './data.json'

import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class Bestselling extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div className='mt-5 p-4' style={{ border: 'solid black 1px',backgroundColor : '#385170' }}>
                <h2 className='p-2 m-1 white'>Best Selling Books</h2>
                <Slider style={{padding: '20px'  , display: 'flex', justifyContent: 'center' }} {...settings}>
                    {/* Card Item */}

                    {data.myData.map((item, index) => (
                        <div key={index} className='hoverest'>


                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ maxWidth: 270 , width : 230 }}>
                                    <CardMedia
                                        component="img"
                                        alt="null"
                                        height="170" 
                                        image={item.book_image}
                                    />
                                    <CardContent style={{}}>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: 'red', height: '50px', marginBottom: '5px' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }} >
                                            {item.author}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Add To Cart</Button>
                                    </CardActions>
                                </Card>
                            </div>

                        </div>
                    ))}




                </Slider>
            </div>
        );
    }
}

{/* <div key={key} className="d-flex flex-column border" >

<div class="card-img" >
    <img className='w-100' src={item.book_image} />
</div>

<div class="card-body p-3" >
    <h1>{item.title}</h1>
    <p class="">{item.author}</p>
    <button type="button" class="w-50" style={{ fontSize: '25px' }}>{`& ${item.title.length}`}</button>
</div>

</div> */}


{/* {data.fiction.map((item, key) => (
                <div key={key} className="m-2 " style={{border : 'solid red 1px' ,width : '300px'}}>

                    <div className="card-img m-auto " style={{width : '120px' , height : ''}} >
                        <img className='m-auto ' src={item.book_image} style={{ height : '180px'}} />
                    </div>

                    <div className="card-body border border-warning d-flex flex-column justify-content-around" >
                        <h4 className=''>{item.title}</h4>
                        <p className="">{item.author}</p>
                        <button type="button" className="w-50" style={{ fontSize: '15px' }}>{`& ${item.title.length}`}</button>
                    </div>
                </div>
            ))} */}