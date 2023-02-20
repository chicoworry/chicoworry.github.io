const Footer = () => {
   return (
    <footer className='my-5'>
        <div className='flex flex-col justify-around'>
            <div className='
                font-gothic text-center text-4xl leading-[0.9]
                border-[1px] border-white/50
                bg-gradient-to-b from-transparent to-[#303a75]
                w-fit h-fit p-1.5 mb-3 mx-auto
                animate-gradient-y'
            >
            cw
            </div>
            <div className='flex justify-center whitespace-pre text-lg text-white/70'>
                © chicoworry.github.com {new Date().getFullYear()}
            </div>
        </div>

    </footer>
   ) 
}

export default Footer;