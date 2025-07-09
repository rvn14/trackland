import { Button } from '@/components/ui/button';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className='relative min-h-screen w-full overflow-x-hidden bg-charcoal'>
      <nav className='absolute top-0 w-full z-50 p-6'> 
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold text-white flex items-center'>
            Track<span className='text-orange'>Land</span>
          </div>
          <div className='hidden md:flex space-x-8 text-white/80'>
            <a href="#" className='hover:text-orange transition-colors duration-300 font-medium'>Features</a>
            <a href="#" className='hover:text-orange transition-colors duration-300 font-medium'>Security</a>
            <a href="#" className='hover:text-orange transition-colors duration-300 font-medium'>About</a>
            <a href="#" className='hover:text-orange transition-colors duration-300 font-medium'>Contact</a>
          </div>
          <Button className='px-6 py-2 bg-gradient-to-r from-orange to-orange/90 text-white font-semibold rounded-1/4 cursor-pointer'>
            Explore
          </Button>
        </div>
      </nav>

      <div className='relative w-full h-screen overflow-hidden'>
        {/* Enhanced gradient background */}
        <div className="absolute top-1/2 left-1/2 rounded-full w-[800px] h-[800px] bg-gradient-to-br from-orange/30 via-orange/10 to-transparent blur-[250px] transform -translate-x-1/2 -translate-y-1/2 z-0" />

        
        {/* Background text */}
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <div className='font-black text-white/70 font-kamino-top text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[20rem] select-none whitespace-nowrap tracking-wider'>
            TRACK<span className='text-orange/70'>LAND</span>
          </div>
        </div>

        {/* 3D Model - properly centered */}
        <div className='absolute inset-0 z-20 flex items-center justify-center'>
          <div className='w-full h-full mx-auto -mb-26'>
            <Spline
              scene="https://prod.spline.design/sQfjp-BXAlA99OEL/scene.splinecode" 
            />
          </div>
        </div>


        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40'>
          <div className='w-8 h-12 border-2 border-orange/60 rounded-full flex justify-center p-2'>
            <div className='w-1 h-3 bg-orange rounded-full animate-bounce' />
          </div>
        </div>
      </div>
      
      <div className='w-full bg-charcoal py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-4'>
            About <span className='text-orange'>Us</span>
          </h2>
          <p className='text-lg text-white/70 text-center mb-12'>
            We pioneer immersive 3D experiences that redefine digital interaction and
            push the boundaries of creativity.
          </p>
        </div>
      </div>
      <footer className='w-full bg-charcoal py-8'>
        <div className='max-w-6xl mx-auto text-center text-white/70'>
          &copy;2025TrackLand. All rights reserved.
        </div>
      </footer>
    </main>
  );
}