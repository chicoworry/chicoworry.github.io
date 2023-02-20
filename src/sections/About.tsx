/*
    Too lazy to update the page every year
    grabbed from https://stackoverflow.com/questions/4076321/javascript-age-calculation
*/
const getYear = () => {
    const birthdate = new Date('December 19, 2000 00:00:00');
    const today = new Date();

    let years = (today.getFullYear() - birthdate.getFullYear());

    if (today.getMonth() < birthdate.getMonth() || today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate()) {
        years--;
    }

    return years;
}

const About = () => {
    return (
        <section className='px-5 sm:px-0 mb-10'>
            <div className='text-xl font-semibold mb-5'>
                <span className='bg-gradient-to-r from-pink-600 to-violet-500 bg-[length:100%_2px] bg-no-repeat bg-bottom pb-1'>About me</span>
            </div>
            <p className='text-lg text-white/95'>
                Hi! I'm Matias, a 22 years old developer from Argentina 🇦🇷
                who is passionate about technology and the creative solutions 
                that programming can offer. I have a strong foundation in 
                several programming languages, including JavaScript, Rust, and 
                Elixir, and I enjoy exploring new technologies to expand 
                my skillset. I have experience working on various projects, 
                both independently and as part of a team, and I'm always 
                eager to learn and collaborate with others to create great software.

                When I'm not tinkering
                with code, you can usually find me drinking mate 🧉, hanging
                out with friends or listening to music (or maybe doing all three!).
            </p>
        </section>
    )
}

export default About;