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
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { borderColor } from '@mui/system';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",alignItems : 'center' , justifyContent : "center" , background: "#c5cae9" , color : 'black',height : 50 ,width : 45,fontSize : 120, padding : 10  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",alignItems : 'center' , justifyContent : "center" , background: "#c5cae9" , color : 'black',height : 50 ,width : 45,fontSize : 120, padding : 10  }}
        onClick={onClick}
      />
    );
  }


export default function Bestselling() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: false, 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Stack padding={10}>
            <Typography variant='h4' sx={{ paddingBottom: 5 }}>Best Selling Books</Typography>

            <Slider  {...settings} style={{ padding: '20px'}}>


                {data.myData.map((item, index) => (
                    <Stack key={index}  p={3} >

                        <Stack display='flex' flexDirection='column' alignItems='center' justifyContent="center">
                            <Card sx={{ width: 170  }}>
                                <CardMedia
                                    component="img"
                                    alt="null"
                                    height="170"
                                    image={item.book_image}
                                />
                                <CardContent >
                                    <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>
                                        <Typography gutterBottom variant="h6" component="div" style={{ color: 'red', height: 25, marginBottom: '5px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                            {item.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} >
                                            {item.author}
                                        </Typography>
                                    </Link>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Add To Cart</Button>
                                </CardActions>
                            </Card>
                        </Stack>

                    </Stack>
                ))}




            </Slider>
        </Stack>
    );
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