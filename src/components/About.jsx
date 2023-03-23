import './styles.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'animate.css';

export default function About() {
    return (
        <div id="about-text" className='animate__animated animate__slideInLeft'>
            <h1>App desarrolada por: <span>Jose Boschero</span></h1>
            <h2>Contacto:</h2>
            <div>
                <a href="https://github.com/joseboschero" target='_blank'><GitHubIcon fontSize='large' /></a>
                <a href="https://www.linkedin.com/in/jose-boschero-936489218/" target='_blank'><LinkedInIcon fontSize='large' /></a>
            </div>
        </div>
    );
}