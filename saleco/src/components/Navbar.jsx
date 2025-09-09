import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

 // 1 useeffect (() => {...}) har render ky bad chly ga (default behavior)
 // 2 useeffect (() => {...} ,{}) sirf ik dfa chly ga (mount render hony pr)
 // 3 useeffect (() => {...} ,{state}) sirf jb state ya props update hu tb chly ga
  useEffect(() => {
    fetch('/data/Navbar.json')
      .then(response => response.json())
      .then(data => setMenuItems(data.items))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  


  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className={`bg-gray-700  text-white p-4 z-20 fixed w-full transition-colors duration-3 00`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold ml-56">Selecao</div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} mr-48`}>
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.id}
                className="block py-2 px-2 hover:bg-orange-600 rounded-full"
                onClick={() => item.submenu && toggleDropdown(index)}
              >
                {item.name}
              </a>
              {item.submenu && dropdownOpen === index && (
                <ul className="absolute left-0 text-black mt-1 bg-white shadow-lg rounded-lg z-30">
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex} className="relative group">
                      <a
                        href={submenuItem.link}
                        className="block py-2 px-4 hover:text-orange-600"
                      >
                        {submenuItem.name}
                      </a>
                      {submenuItem.deepmenu && (
                        <ul className="absolute left-full text-black top-0 ml-2 bg-white shadow-lg rounded-lg z-40">
                          {submenuItem.deepmenu.map((deepItem, deepIndex) => (
                            <li key={deepIndex}>
                              <a
                                href={deepItem.link}
                                className="block py-2 px-4 hover:text-orange-600"
                              >
                                {deepItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
