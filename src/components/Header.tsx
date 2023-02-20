import { ReactComponent as Github } from '../assets/images/github.svg';
import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg';
import { ReactComponent as Email } from '../assets/images/email.svg';

/*
    In the futere I might need to add Discord and Youtube channel links so
    remember you downloaded the above logos from https://fontawesome.com
*/

const Header = () => {
    return (
        <div className='relative'>
            <div className='arealight w-full h-52 md:h-64'></div> 
            <div className='nav flex flex-col justify-center top-[1.5em] left-1/2 translate-y-[1em] md:translate-y-[2em] translate-x-[-50%]'>
                <div className='logo font-gothic font-medium text-5xl md:text-6xl text-center'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500 animate-gradient-x'>chicoworry</span>
                </div>
                <div className='flex flex-row justify-center mt-7 gap-3'>
                    <a className='inline-flex items-center' href='https://github.com/chicoworry'>
                        <Github className='w-5 sm:w-6 h-5 sm:h-6 text-white/30 hover:text-white/70 fill-none'/>
                    </a>
                    <a className='inline-flex items-center' href='https://www.linkedin.com/in/matias-salgado-2922ab209/'>
                        <Linkedin className='w-6 sm:w-7 h-6 sm:h-7 text-white/30 hover:text-white/70 fill-current'/>
                    </a>
                    <a className='inline-flex items-center' href='mailto:chicoworry@gmail.com'>
                        <Email className='w-6 sm:w-7 h-6 sm:h-7 text-white/30 hover:text-white/70'/>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Header;