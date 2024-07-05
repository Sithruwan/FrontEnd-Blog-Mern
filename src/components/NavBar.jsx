import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  const user = !true;

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    // { id: 1, text: 'Home' },
    // { id: 2, text: 'Company' },
    // { id: 3, text: 'Resources' },
    { id: 4, text: 'Login' ,path:'/login'},
    { id: 5, text: 'Register' ,path:'/register'},
  ];
  const navItemsAfterLoged =[
    { id: 1, text: 'Write' },
    { id: 2, text: 'Profile' },
  ]

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <Link to='/'><h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1></Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center'>
    {/* Desktop Search Input */}
      <input
          type='text'
          placeholder='Search...'
          className='ml-4 p-2 rounded-md text-black'
        />

        <ul className='flex'>
          {
            user
            ? navItemsAfterLoged.map((item) => (
              <Link key={item.id} to={item.path}>
              <li key={item.id} className='ml-4'>
                {item.text}
              </li>
              </Link>
            ))
            : navItems.map((item) => (
              <Link key={item.id} to={item.path}>
              <li key={item.id} className='ml-4'>
                {item.text}
              </li>
              </Link>
            ))
          }
        </ul>
        
       
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

        {/* Mobile Search Input */}
        <div className='flex items-center px-4 mb-4'>
          <input
            type='text'
            placeholder='Search...'
            className='p-2 rounded-md w-full text-black'
          />
        </div>

        {/* Mobile Navigation Items */}
        {
            user
            ? navItemsAfterLoged.map((item) => (
              <li key={item.id} className='ml-4'>
                {item.text}
              </li>
            ))
            : navItems.map((item) => (
              <li key={item.id} className='ml-4'>
                {item.text}
              </li>
            ))
          }
      </ul>
    </div>
  );
};

export default NavBar;
