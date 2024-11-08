import Link from 'next/link';
import Image from 'next/image'
import { title } from 'process';
import { Metadata } from 'next/types';
import Navbar from './components/Navbar';

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
          <Link target="_blank"  href="/Cookie_Clicker">
            <div className="container bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
              
            <p className="p-4 text-gray-700 text-lg"> Check out our featured game of the week! Click to learn more about cookie clicker an exciting indie title. </p>
              
            </div>
          </Link>
        }
      </main>
    </div>
  );
}