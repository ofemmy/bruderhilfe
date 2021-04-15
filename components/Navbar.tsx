import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
export function Navbar() {
  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About us" },
    { href: "/projects", name: "Projects" },
    { href: "/volunteer", name: "Volunteer" },
  ];
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img src="logo.png" alt="" className="h-8 sm:h-10 w-auto" />
                </div>
              </div>
              <div className="hidden sm:flex sm:space-x-4 md:space-x-8">
                {links.map((link) => (
                  <Link href={link.href}>
                    <a className="text-gray-700 px-3 py-2 rounded-md text-sm font-body font-semibold inline-flex items-center hover:font-bold hover:text-yellow active:font-bold uppercase tracking-wide">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {links.map((link) => (
              <Link href={link.href}>
                <a className="border-transparent text-green hover:bg-gray-50 hover:border-yellow hover:text-yellow block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase">
                  {link.name}
                </a>
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
