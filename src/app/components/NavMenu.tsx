'use client';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <button
      className='hover:scale-110 block md:hidden'
      onClick={() => setIsOpen(!isOpen)}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavMenu;
