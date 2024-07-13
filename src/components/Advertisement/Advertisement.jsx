import '../Advertisement/Advertisement.css'
import Shoes from '../../images/shoes.png'

function Advertisement() {
  return (
    <div className='advertisement_container'>
        <div className='.advertisement_container_first'>
            <h1 className='advertisement_title'>Adidas Men Running Sneakers</h1>
            <h4 className='advertisement_text'>Performance and design. Taken right to the edge.</h4>
            <p className='advertisement_button'>SHOP NOW</p>
        </div>
        <div>
            <img src={Shoes} alt="Shoes Img" />
        </div>
    </div>
  )
}

export default Advertisement