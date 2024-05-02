import React from 'react'
import { Fragment, useRef } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const navigation = [
        { name: 'Introduction', href: 'Introduction' },
        { name: 'Skills', href: 'Skills'},
        { name: 'Experiences', href: 'Experiences' },
        { name: 'About', href: 'About'},
      ]
    
const pathname = window.location.pathname;

    return (
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => {
            return(
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">\
                {/* Mobile menu button*/}
                  {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div> */}
                  <div className="flex flex-1  justify-center items-center sm:items-stretch w-max">
                    <div className="flex flex-shrink-0 items-center text-white text-lg font-bold">
                      PortFolio
                    </div>
                    <div className=" flex sm:ml-20 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => {
                            const isActive = pathname?.includes(item.href)
                            return(
                            
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </a>
                        )})}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}}
        </Disclosure>
    )
}

export default Navbar