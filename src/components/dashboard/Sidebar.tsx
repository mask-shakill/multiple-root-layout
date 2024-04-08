import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <nav className='flex p-5 bg-slate-900 justify-between'>
                <h1>Dashboard Header</h1>
                <ul className='flex items-center gap-x-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/login'}>Login</Link>
                </ul>

            </nav>
           
            
        </div>
    );
};

export default Sidebar;