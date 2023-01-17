// import img1 from './images/img-1.jpg'
import './bestSelling.css'
import data from './data.json'

function Bestselling() {

    return (
        <div className='d-flex flex-row flex-wrap '>

            {data.fiction.map((item, key) => (
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
            ))}

        </div>



    )
}



export default Bestselling


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