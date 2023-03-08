import { Dropdown, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Stack } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import Header from './Header';
import Bestselling from './Bestselling'; 

function App() {
  
  return (
    <Stack   direction='column'>
      <Header/>
    </Stack>  
  );
}

export default App; 
