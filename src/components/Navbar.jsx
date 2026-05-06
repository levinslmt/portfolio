import { useState } from "react";
import { NavbarMenu } from "../datas/Nav";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className=" flex justify-between items-center py-6">
        {/* Logo */}
        <div className="text-2xl font-mono">@levinjstn</div>

        {/* Desktop Menu (Hidden on mobile) */}
        <ul className="hidden md:flex gap-8 font-medium">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="hover:text-neutral-700">{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Visible only on mobile) */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center gap-6 py-10">
            {NavbarMenu.map((item) => (
              <li key={item.id} onClick={() => setIsOpen(false)}>
                <a href={item.link} className="text-xl font-semibold">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}