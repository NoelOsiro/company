'use client'
// NavbarLogo.tsx
import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}
const NavbarLogo: React.FC = () => {
  return (
    <a href="/home" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
      ISA Company
    </a>
  );
};
const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      href={href}
    >
      {label}
    </a>
  );
};
interface Iprops{
  show:boolean;
}
const MoreDropdown: React.FC<Iprops> = (props:Iprops) => {
  return (
    <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right transition-transform duration-100 ease-out transform opacity-100 scale-100">
      {props.show && (
                  <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right transition-transform duration-100 ease-out transform opacity-100 scale-100">
                    <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: 'Appearance', description: 'Easy customization', icon: 'path to svg' },
                          { title: 'Comments', description: 'Check your latest comments', icon: 'path to svg' },
                          { title: 'Analytics', description: 'Take a look at your statistics', icon: 'path to svg' },
                        ].map((item, index) => (
                          <a
                            key={index}
                            className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#"
                          >
                            <div className="bg-teal-500 text-white rounded-lg p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4">
                                {item.icon}
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="font-semibold">{item.title}</p>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
    </div>
    
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleMoreButtonClick = () => {
    setOpen(false);
    setShow(!show);
  };

  return (
    <div className="min-h-screen">
      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              {/* Navbar Logo */}
              <NavbarLogo />
              <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  {/* ... */}
                </svg>
              </button>
            </div>
            <nav className={`flex-col flex-grow ${open ? 'flex' : 'hidden'} pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
              {/* Navigation Links */}
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <NavLink key={index} href={link.href} label={link.label} />
              ))}
              <div className="relative" x-data="{ open: true }">
                <button
                  onClick={()=>handleMoreButtonClick()}
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  <span>More</span>
                  <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}>
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              <MoreDropdown show={show}/>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


