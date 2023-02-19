import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'

import Slider from "react-slick"
import firstImg from './images/firstImg.jpg'
import secondImg from './images/secondImg.jpg'
import thirdImg from './images/thirdImg.jpg'
import Typical from 'react-typical'
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
                <Typography variant="h2">
                    <Typical
                        steps={['Trending Books', 4000, 'Featured Books of the  Februrary', 500]}
                        loop={Infinity}
                        wrapper="d"
                    />
                     </Typography>
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
        autoplaySpeed: 4000,
        pauseOnHover: false,
        nextArrow: <Arrows />,
        prevArrow: <Arrows />
    }

    return (
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