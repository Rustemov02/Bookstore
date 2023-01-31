import { Dropdown, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img1 from './images/img-1.jpg'
// import img2 from './images/img-2.jpg'
// import img3 from './images/img-3.jpg'

import Header from './Header';
import Slide from './List';
import Bestselling from './Bestselling';
import Categories from './Categories';
import Feature from './Feature';
import Release from './Releases';
// import BasicButton from './learnMU'; 
function App() {

  return (
    <div>

      <Header />
      <Slide />
      <Categories />
      <Bestselling />
      <Feature />
      <Release />
      {/* <BasicButton/> */}
    </div>
  );
}

export default App;


/* 
 // {
        //     "id" : 1,
        //     "title": "LESSONS IN CHEMISTRY",
        //     "author": "Bonnie Garmus",
        //     "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg"
        // },
        // {
        //     "id" : 2,
        //     "title": "WITHOUT A TRACE",
        //     "author": "Danielle Steel",
        //     "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984821867.jpg"
        // },
        // {
        //     "id" : 3,
        //     "title": "THE SEVEN HUSBANDS OF EVELYN HUGO",
        //     "author": "Taylor Jenkins Reid",
        //     "book_image": "https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg"
        // },
        // {
        //     "id" : 4,
        //     "title": "THE HOUSE IN THE PINES",
        //     "author": "Ana Reyes",
        //     "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593186718.jpg"
        // },
        // {
        //     "id" : 5,
        //     "title": "THE SILENT PATIENT",
        //     "author": "Alex Michaelides",
        //     "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250301697.jpg"
        // },
        // {
        //     "id" : 6,
        //     "title": "DEMON COPPERHEAD",
        //     "author": "Barbara Kingsolver",
        //     "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063251922.jpg"
        // },
        // {
        //     "id" : 7,
        //     "title": "LOATHE TO LOVE YOU",
        //     "author": "Ali Hazelwood",
        //     "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593437803.jpg"
        // }    
*/