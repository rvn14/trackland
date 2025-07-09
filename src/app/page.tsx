
import { Button } from '@/components/ui/button';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className='relative min-h-screen w-full overflow-x-hidden bg-black'>
      <nav className='absolute top-0 w-full z-50 p-6'> 
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold text-white'>Track<span className='text-orange-600'>Land</span></div>
          <div className='hidden md:flex space-x-8 text-white/80'>
            <a href="#" className='hover:text-violet-400 transition-colors'>Features</a>
            <a href="#" className='hover:text-violet-400 transition-colors'>Security</a>
            <a href="#" className='hover:text-violet-400 transition-colors'>About</a>
            <a href="#" className='hover:text-violet-400 transition-colors'>Contact</a>
          </div>
          <Button variant="default" className='bg-orange-600 hover:bg-orange-700 cursor-pointer'>
            Get Started
          </Button>
        </div>
      </nav>
      <div className='relative w-full h-screen overflow-hidden'>
        <div className="gradDot absolute top-1/2 left-1/2 rounded-full w-[600px] h-[600px] bg-orange-600 blur-[200px] transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"></div>
        <div className="gradDot absolute top-1/2 left-1/2 rounded-full w-[400px] h-[400px] bg-orange-500 blur-[150px] transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-50"></div>
          <div className='absolute bottom-0 w-full h-full overflow-hidden -mb-14'>
            <Spline
              scene="https://prod.spline.design/sQfjp-BXAlA99OEL/scene.splinecode" 
            />
          </div>
      </div>
      
      <div className='w-full min-h-screen flex items-center justify-center bg-black'>

      </div>
    </main>
  );
}
