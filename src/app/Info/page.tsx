import Link from 'next/link';
import Image from 'next/image'
import { title } from 'process';
import { Metadata } from 'next/types';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'FreeFriday.Games: Info',
  description:"FreeFriday.Games: This website is dedicated to showcasing free and fun indie games every Friday! Discover hidden gems and support independent developers with my weekly picks, complete with reviews and reasons why each game caught my eye. By contributing to this project, you'll help me gain valuable experience and build a portfolio that will strengthen my application.",
};


export default function Home() {
  return (

    
    
    <div className="min-h-screen bg-gray-100">
            <Navbar />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {
            <div>
                <p className='text-center font-bold text-gray-800 text-3xl'>Work in progress...</p>
            </div>
        }
      </main>
    </div>
  );
}