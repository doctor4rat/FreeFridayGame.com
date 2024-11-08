import Link from 'next/link';
import Image from 'next/image'
import { title } from 'process';
import { Metadata } from 'next/types';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'FreeFriday.Games: Cookie clicker',
  description:"FreeFriday.Games: This website is dedicated to showcasing free and fun indie games every Friday! Discover hidden gems and support independent developers with my weekly picks, complete with reviews and reasons why each game caught my eye. By contributing to this project, you'll help me gain valuable experience and build a portfolio that will strengthen my application.",
};


export default function Home() {
  return (

    
    
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {
            <div>
              <p className='text-gray-800 font-extrabold'>Date:10/11/2024 <br /> by:Adar-Albajari</p>
                <p className='text-4xl text-center font-bold text-gray-800'>Cookie Clicker</p> 
                <br /> <br />
                <p className='text-gray-800 text-2xl font-bold'>what is Cookie clicker?</p>
                <br />
                <p className=' text-lg text-gray-800'>Cookie Clicker is a popular incremental game that revolves around a simple concept: clicking a giant cookie. Each click earns you a cookie, which you can use to purchase upgrades. These upgrades, in turn, increase your cookie production rate, allowing you to earn more.</p>
                <br />
                <p className='text-gray-800 font-bold text-2xl'>What's the Goal?</p>
                <br />
                <p className='text-gray-800 text-lg'>While there's no definitive end goal, Cookie Clicker offers 622 achievements of varying difficulty. The true appeal lies in the endless progression and the satisfaction of seeing your cookie production skyrocket. </p>
                <br />
                <p className='text-gray-800 font-bold text-2xl'>how to play?</p>
                <br />
                <p className='text-gray-800 text-lg'>You can play Cookie Clicker in two ways: <br /><br />1.Steam: Purchase the game for $5.00 USD to play offline and enjoy additional features. <br /> <br /> 2.Web and Mobile: Play the free version on your web browser or mobile device.</p>
                <br />
                <p className='text-gray-800 font-bold text-2xl'>Is it Worth It??</p>
                <br />
                <p className='text-gray-800 text-lg'>If you enjoy incremental games and the satisfaction of steady progress, Cookie Clicker is definitely worth trying. The free web and mobile versions offer a great way to experience the core gameplay. For those seeking additional features and offline play, the Steam version is a worthwhile investment.</p>
                <br />
                <p className='text-gray-800 font-bold text-2xl'>In Conclusion</p>
                <br />
                <p className='text-gray-800 text-lg'>Cookie Clicker is a simple yet addictive game that offers endless possibilities. Whether you're a casual gamer looking for a mindless time-waster or a dedicated player seeking a challenging progression, this game has something to offer. With its straightforward mechanics and satisfying gameplay loop, Cookie Clicker has captured the hearts of many. So, grab your mouse and start clicking your way to cookie empire!</p>
                <br />
                <br /> <br />
                <Link href='here'></Link>
                <p className='text-gray-800 font-bold text-2xl'>LINKS:</p> 
                <br /> <br />
                <a href='https://play.google.com/store/apps/details?id=org.dashnet.cookieclicker&hl=en&gl=US' target='_blank' className='text-cyan-950 text-xl font-bold hover:text-gray-900'>play on the play store</a>
                <br /> <br />
                <a href='https://orteil.dashnet.org/cookieclicker/' target='_blank' className='text-cyan-950 text-xl font-bold hover:text-gray-900'>play on the web</a>
                <br /> <br />
                <a href='https://store.steampowered.com/app/1454400/Cookie_Clicker/' target='_blank' className='text-cyan-950 text-xl font-bold hover:text-gray-900'>buy on steam</a>

            </div>
        }
      </main>
    </div>
  );
}