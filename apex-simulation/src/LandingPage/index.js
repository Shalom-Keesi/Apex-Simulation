import './index.css';
import logo from '../Images/logo.png';


function LandingPage (){
    return(
        <div className='landingPage'>
            <div className='navigation'>

                <img src='/home/student/Documents/Apex-Simulation/Apex-Simulation/apex-simulation/src/Images/logo.png'></img>


            <nav>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Contacts</li>
            </nav>

            </div>

            <div className='landing-page-texts'>
                <p>ELEVATE YOUR TEACHING, <br/> ELEVATE THEIR POTENTIAL</p>

            </div>

            <div className='explore-button'>
                <button>Explore</button>

            </div>


        </div>
    )
}

export default LandingPage;