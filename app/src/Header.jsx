import { Dropdown, Button, Carousel, Card } from 'react-bootstrap';

import { Stack, createTheme, ThemeProvider } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';


import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'

import { Link, NavLink, Route, Router, Routes } from 'react-router-dom'

import Home from './Home';
import Bestselling from './Bestselling';
import Categories from './Categories';
import Feature from './Feature';
import BookDetails from './BookDetail';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    border: 'solid grey 1px'
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '30ch',
    //   },
    // },
  },
}));


function Header() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      customHeaderColor: {
        main: '#fafafa'
      }
    }
  })

  const customStyle = {
    textDecoration: 'none',
    color: 'black', 
    '&:hover' : {
      border : 'solid red 1px'
    }
  }
  const textStyle = {
    "&:hover": {
      color: "red"
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color='customHeaderColor' enableColorOnDark={true}>
          <Toolbar sx={{ border: 2 }} >

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Logoo
            </Typography>

            {/* LINKS */}
            <Stack direction='row' spacing={2} marginRight={10} alignItems="center" justifyContent="space-around" width={500}>

              <Link style={customStyle} to="/"><Typography sx={textStyle}>Home</Typography></Link>
              <Link style={customStyle} to="/categories"><Typography sx={textStyle}>Categories</Typography></Link>

              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <Link style={customStyle} to="/">
                    Shop
                  </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Shop 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Shop 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Shop 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <Link style={{ ...customStyle }} to="/categories"> Pages </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/categories">Shop 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Shop 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Shop 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <Link style={{ ...customStyle }} to="/categories">
                    Blog
                  </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="">Blog 1</Dropdown.Item>
                  <Dropdown.Item href="">Blog 2</Dropdown.Item>
                  <Dropdown.Item href="">Blog 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Stack>


            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:bookId" element={<BookDetails />} />

          {/* <Route path="/categories" element={</>}/> */}
        </Routes>
      </ThemeProvider>
    </Box>


    //  <Stack >

    //   <div>Logoo</div>

    //   <div className='d-flex '>

    //     <Link to="/"><Button variant='light'>Home</Button></Link> 
    //     <Link to="/categories"><Button variant='light'>Categories</Button></Link>

    //     <Dropdown>
    //       <Dropdown.Toggle variant="light" id="dropdown-basic">
    //         Shop
    //       </Dropdown.Toggle>

    //       <Dropdown.Menu>
    //         <Dropdown.Item href="#/action-1">Shop 1</Dropdown.Item>
    //         <Dropdown.Item href="#/action-2">Shop 2</Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">Shop 3</Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>

    //     <Dropdown>
    //       <Dropdown.Toggle variant="light" id="dropdown-basic">
    //         Pages
    //       </Dropdown.Toggle>

    //       <Dropdown.Menu>
    //         <Dropdown.Item href="#/action-1">Shop 1</Dropdown.Item>
    //         <Dropdown.Item href="#/action-2">Shop 2</Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">Shop 3</Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>

    //     <Dropdown>
    //       <Dropdown.Toggle variant="light" id="dropdown-basic">
    //         Blog
    //       </Dropdown.Toggle>

    //       <Dropdown.Menu>
    //         <Dropdown.Item href="#/action-1">Blog 1</Dropdown.Item>
    //         <Dropdown.Item href="#/action-2">Blog 2</Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">Blog 3</Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>

    //   </div>


    //   {/* search */}
    //   <div>
    //     <input className='p-2' style={{ width: '340px' }} placeholder="Search by keywords" />
    //   </div>



    // </Stack>
  )
}

export default Header