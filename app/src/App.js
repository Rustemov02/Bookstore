// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css' 

function App() {
  return (
    <div className='container border border-success'>
      <div className='border border-primary d-flex flex-row justify-content-around align-items-center'>
        {/* <div>ICON</div> */}
        <div>Logoo</div>
        {/* list */}
        <div>
          <ul className='list-group d-flex flex-row'>
            <li className='list-group-item dropdown-toggle' data-toggle="dropdown">Home</li> 
            <li className='list-group-item'>Categories</li>
            <li className='list-group-item'>Shop</li>
            <li className='list-group-item'>Blog</li>
          </ul>
        </div>
        {/* search */}
        <div>
          <input/> 
        </div>
      </div>
    </div>
  );
}

export default App;
