
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'



function LandingPage() {

  return (
    <div style={{background: '#FFD8DF', margin:0, padding:0, boxSizing:'border-box', minHeight:'100vh', color:'black'}}>
    <NavBar/>
    <HeroSection/>
    <Footer></Footer>
    </div>
  )
}

export default LandingPage