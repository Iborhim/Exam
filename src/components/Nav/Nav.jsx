import Icon1 from '../../images/icon1.png'
import Icon2 from '../../images/icon2.png'
import Logo from '../../images/logo.png'
import '../Nav/Nav.css'

function Nav() {
  return (
    <div className='container'>
      <div className='container_header'>
        <img src={Icon1} alt="Icon1 img" />
        <h1>My profile</h1>
      </div>
      <div className='container_center'>
        <img src={Logo} alt="Logo img" />
        <h2>E-Comm</h2>
      </div>
      <img className='Single_logo' src={Icon2} alt="Icon2 img" />
    </div>
  )
}

export default Nav