import HeroImg from '../../images/img1.png'
import '../Hero/Hero.css'

function Hero() {
  return (
    <>
        <img className='container_hero' src={HeroImg} alt="Hero Img" />
    </>
  )
}

export default Hero