import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HiX, HiMenuAlt3, HiOutlineBell, HiSearch } from "react-icons/hi";
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Catalogue', href: '/catalogue', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Community', href: '#', current: false },
  { name: 'Pro Plan', href: '#', current: false },
]

const loggedIn = true;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-screen z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
              </div>

              {/* Menu items container */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Menu Logo */}
                <Disclosure.Button as={Link} to="/" className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-12 w-auto"
                    src="codeEm-logo.png"
                    alt="Code'em"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto"
                    src="Logo.svg"
                    alt="Code'em"
                  />
                </Disclosure.Button>
                {/* Menu items */}
                <div className="hidden md:block sm:ml-4 m-auto">
                   <div className="flex space-x-4 items-center text-sm lg:text-base whitespace-nowrap">
                     {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-backgroundDark text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium lg:text-lg md:text-base'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side (search, profile, etc.) */}
              <div className="absolute inset-y-0 right-10 flex items-center space-x-4 pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-2">
                <button
                  type="button"
                  className="bg-gray-800 p-1 hidden lg:block rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Search button</span>
                  <HiSearch className="h-6 w-6" aria-hidden="true" />
                </button>
                {loggedIn ?
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                </button>
                  : 
                <>
                  <button
                    type="button"
                    className="bg-gray-800 py-1 px-4 text-gray-300 font-semibold hover:text-white"
                  >
                    <span className="sr-only">Login button</span>
                    <p className="" aria-hidden="true">Login</p>
                  </button>
                  <button
                    type="button"
                    className="bg-gray-800 py-1 px-6 text-gray-300 font-semibold border-2 border-primary hover:text-white hover:bg-primary"
                  >
                    <span className="sr-only">Sign up button</span>
                    <p className="" aria-hidden="true">Sign up</p>
                  </button>
                </>
                }
              </div>
              {/* Profile dropdown */}
              {loggedIn ?
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="Fuff.jpeg"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
                : null
              }
            </div>
            
            {/* Menu when screen is small */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Login */}
                <Link
                  key="Login"
                  to="#"
                  className={classNames(
                    loggedIn ? 'hidden' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={loggedIn ? 'page' : undefined}
                  >
                  Login
                </Link>
                {/* The rest of links */}
                {navigation.map((item) => (
                  <Disclosure.Button
                    as={Link}
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-backgroundDark text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default NavbarComponent
