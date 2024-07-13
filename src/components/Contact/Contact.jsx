import '../Contact/Contact.css'
import Delivery from '../../images/delivery.png'
import Refund from '../../images/refund.png'
import Support from '../../images/support.png'

function Contact() {
  return (
    <div className='contact_container'> 
        <div className='contact_container_card'>
            <img src={Delivery} alt="Delivery Img" />
            <h1>FREE SHIPPING</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className='contact_container_card'>
            <img src={Refund} alt="Delivery Img" />
            <h1>100% REFUND</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className='contact_container_card'>
            <img src={Support} alt="Delivery Img" />
            <h1>SUPPORT 24/7</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
  )
}

export default Contact