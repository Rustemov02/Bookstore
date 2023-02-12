import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'

import Slider from "react-slick"
import firstImg from './images/firstImg.jpg'
import secondImg from './images/secondImg.jpg'
import thirdImg from './images/thirdImg.jpg'

import { Stack, Typography, Box, Button } from '@mui/material' 


function CustomSlide() {
    const { index, ...props } = this.props;
    return (
        <div {...props}>
            <h3>{index}</h3>
        </div>
    );
}


function Arrows(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "none" }}
            onClick={onClick}
        />
    );
}

function Item(props) {
    const { img } = props
    const customStyle = {
        width: "50%",
        height: "90vh",
        padding: '30px 40px'
    }
    return (
        <Stack direction='row'>
            <Box component="div" sx={{ px: 5, width: '50%', display: "flex", flexDirection: 'column', alignItems: "flex-start", justifyContent: 'center', gap: 3 }}>
                <Typography variant="" color='primary'>THE  BOOKWORM EDITORS</Typography>
                <Typography variant="h2">Featured Books of the  <Box component='span'>Februrary</Box></Typography>
                <Button variant="contained">See More</Button>
            </Box>
            <img style={customStyle} src={img} alt="" />
        </Stack>
    )
}
function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        nextArrow: <Arrows />,
        prevArrow: <Arrows />
    }

    return (
        // <Carousel>
        //     <Carousel.Item>

        //         <img
        //             className="d-block w-100"
        //             style={{ height: '90vh'  }}
        //             src={img1}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>

        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             style={{ height: '90vh', backgroundPosition: 'center ', backgroundSize: 'cover' }}
        //             src={img2}
        //             alt="Second slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>

        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             style={{ height: '90vh', backgroundPosition: 'center ', backgroundSize: 'cover' }}
        //             src={img3}
        //             alt="Third slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>
        //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        <div style={{ background: '#ffebee', margin: 'auto', width: '100%' }}>
            <Slider {...settings}>
                <Stack>
                    <Item img={firstImg} />
                </Stack>
                <Stack>
                    <Item img={secondImg} />
                </Stack>
                <Stack>
                    <Item img={thirdImg} />
                </Stack>
            </Slider>
        </div>
    )
}

export default Slide