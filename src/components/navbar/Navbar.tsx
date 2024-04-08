import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center p-5 bg-green-500  font-bold justify-between
            '>
                <h1>Global Navbar</h1>
                <ul className='flex gap-x-10'>
                    <Link href={'blog'}>Blog</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/dashboard'}>Dashboard</Link>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;