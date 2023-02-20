import React from 'react';
import { Dropdown, Button, Carousel, Card } from 'react-bootstrap';

import { Stack, createTheme, ThemeProvider, CssBaseline } from '@mui/material'
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


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';





import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'
import svgElement from './svgElement.svg'

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    border: 'solid grey 1px'
  },
}));


function Header() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      customHeaderColor: {
      }
    }
  })

  const customStyle = {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      border: 'solid red 1px'
    }
  }
  const textStyle = {
    "&:hover": {
      color: "red"
    }
  }




  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Categories', 'Shop', 'Pages'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar position="static" color='customHeaderColor' enableColorOnDark={true}>
          <Toolbar sx={{ borderBottom: 1, borderTop: 1, borderColor: 'gray', padding: '30px  ', display: 'flex', alignItems: 'center' }} >



            <Stack >
              {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                  {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                  <IconButton>
                    <MenuIcon onClick={toggleDrawer(anchor, true)} />
                  </IconButton>
                  <Drawer
                    anchor='left'
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Stack>























            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }  , height : 45 ,alignItems : 'center' , px : 3}}
          >
              <img src={svgElement} alt="" />
            </Typography>

            {/* LINKS  - change with array ! very practice*/}
            <Stack direction='row' spacing={2} marginRight={10} alignItems="center" justifyContent="space-around" width={500}>

              <Link style={customStyle} to="/"><Typography sx={textStyle}>Home</Typography></Link>
              <Link style={customStyle} to="/"><Typography sx={textStyle}>Categories</Typography></Link>

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
                  <Link style={{ ...customStyle }} to="/"> Pages </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/categories">Shop 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Shop 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Shop 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <Link style={{ ...customStyle }} to="/  ">
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
        </Routes>
      </ThemeProvider>
    </Box>

  )
}

export default Header