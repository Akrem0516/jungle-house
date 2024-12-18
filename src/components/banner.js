import logo from '../assets/logo.png'
import '../Styles/Banner.css'
 
function Banner() {
    const title = 'Jungle House'
    return (
        <div className='jh-banner' >
            <img src={logo} alt='Jungle House' className='jh-logo' />
            <h1 className='jh-title'>{title}</h1>
        </div>
    )
}
 
export default Banner