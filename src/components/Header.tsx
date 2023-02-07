import React from "react";
import { BellAlertIcon, BellIcon, MagnifyingGlassIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div className=" bg-white flex justify-between border-[var(--primary-text-color)] shadow-md py-5 px-6 fixed top-0 right-0 left-64 z-50">
      <div>
        <MagnifyingGlassIcon className="h-6 w-6"/>
      </div>
      <div className="flex items-center space-x-3">
        <BellAlertIcon className="h-6 w-6"/>
        <UserIcon className="h-6 w-6" />
        <UserCircleIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
