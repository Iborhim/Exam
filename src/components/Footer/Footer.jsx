import Logo from '../../images/logo.png'
import FacebookIcon from '../../images/facebook.png'
import TwetterIcon from '../../images/twitter.png'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div className='footer_container'>

      <div className='footer_container_first'>
        <div className='footer_container_first_logo'>
          <img src={Logo} alt="Logo img" />
          <h1>E-Comm</h1>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 
          standard dummy text ever.Since the 1500s, when an unknown printer.</p>
      </div>

      <div className='footer_container_second'>
        <h1>Follow Us</h1>
        <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
        <div className='footer_container_second_icons'>
          <img src={FacebookIcon} alt="Facebook Icon" />
          <img src={TwetterIcon} alt="Twetter Icon" />
        </div>
      </div>

      <div className='footer_container_theard'>
        <h1>Contact Us</h1>
        <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
      </div>
    </div>
  )
}

export default Footer