import { Dropdown, Button, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'

function Header(){
    return (
        <header className='p-2 m-1 d-flex flex-row justify-content-evenly align-items-center'>
        {/* <div>ICON</div> */}
        <div>Logoo</div>

        {/* list */}
        <div className='d-flex '>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Home
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Home 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Home 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Home 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant='light'>Categories</Button>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Shop
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Shop 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Shop 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Shop 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Pages
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Shop 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Shop 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Shop 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Blog
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Blog 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Blog 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Blog 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>


        {/* search */}
        <div>
          <input className='p-2' style={{ width: '340px' }} placeholder="Search by keywords" />
        </div>
      </header>
    )
}

export default Header