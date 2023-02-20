import { ReactComponent as Discord } from '../assets/images/discord.svg';
import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg';
import { ReactComponent as Email } from '../assets/images/email.svg';

const Contact = () => {
    return (
        <section className='px-5 sm:px-0 mb-10'>
            <div className='text-xl font-semibold mb-7'>
                <span className='bg-gradient-to-r from-pink-600 to-violet-500 bg-[length:100%_2px] bg-no-repeat bg-bottom pb-1'>Contact me</span>
            </div>
            <div className='text-lg'>
                <div className='flex items-center whitespace-pre mb-3'>
                    <Discord className='h-7 w-7 text-white mr-3'/>Add me on Discord <span className='link'>chicoworry#4188</span>
                </div>
                <div className='flex items-center whitespace-pre mb-3'>
                    <Linkedin className='h-7 w-7 text-white fill-current mr-3'/>Let's connect on LinkedIn! <a className='link' href='https://www.linkedin.com/in/matias-salgado-2922ab209/'>Matias Salgado</a>
                </div>
                <div className='flex items-center whitespace-pre mb-3'>
                    <Email className='h-7 w-7 text-white mr-3'/>Send me an email <a className='link' href='mailto:chicoworry@gmail.com'>chicoworry@gmail.com</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;