import { ReactComponent as CodeIcon } from '../assets/images/code.svg';

const GITHUB_PROFILE = 'https://github.com/chicoworry';

const projects = [
    {
        name: 'Battle City',
        description: 'Retro game from the NES with multiplayer capabilities.',
        technologies: ['Rust', 'Golang'],
        link: `${GITHUB_PROFILE}/battle-city`
    },
    {
        name: 'PongOS',
        description: 'Yeah, a dedicated operating system for playing just pong.',
        technologies: ['Rust'],
        link: `${GITHUB_PROFILE}/pong`
    },
    {
        name: 'Serenus',
        description: 'A peaceful text editor for the masses.',
        technologies: ['Zig'],
        link: `${GITHUB_PROFILE}/serenus`
    },
    {
        name: 'Pingy',
        description: 'Yet-another video conferencing software.',
        technologies: ['Elixir', 'WebRTC'],
        link: `${GITHUB_PROFILE}/pingy`
    },
    {
        name: 'Volt ⚡',
        description: 'A blazingly fast key-value database.',
        technologies: ['Zig'],
        link: `${GITHUB_PROFILE}/volt`
    }
]

const Showcase = () => {
    return (
        <section className='px-5 sm:px-0 mb-10'>
            <div className='text-xl font-semibold mb-5'>
                <span className='bg-gradient-to-r from-pink-600 to-violet-500 bg-[length:100%_2px] bg-no-repeat bg-bottom pb-1'>What I've done</span>
            </div>
            <p className='text-lg mb-5 text-white/95'>
                This are my favorite creations so far:
            </p>
            <div className='mb-5'>
                {projects.map((project, index) => {
                    return (
                        <div className='flex flex-row border border-white/20 p-3 mb-5 hover:bg-gradient-to-b from-transparent to-[#303a7545]' key={index}>
                            <div className='flex items-center justify-center w-10 mr-3 font-mono text-xl'>0{index + 1}</div>
                            <div>
                                <div className='font-semibold text-lg'>{project.name}</div>
                                <div className='text-white/70'>{project.description} <a className='link' href={project.link} target='_blank'>View code <CodeIcon className='w-5 h-5 ml-1' /></a></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p className='text-lg text-white/95'>
                I also love contributing to open-source projects. Check <a href='https://github.com/chicoworry' className='link'>my GitHub</a>, where all the magic happens.
            </p>
        </section>
    )
}

export default Showcase;