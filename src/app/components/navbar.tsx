import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div>
      <img src="/Top Header.png" alt="Header" />

      <header className="flex gap-6 items-center p-4 shadow-md bg-white">
        {/* Logo */}
        <img src="/Exclusive.png" alt="Logo" className="h-5" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-7 pl-32">
          <Link href={"/home"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/signup"}>SignUp</Link>
        </div>

        {/* Search Input */}
        <div className="relative pl-28 hidden md:block">
          <input
            type="text"
            className="pl-3 pr-4 py-1 rounded-md border border-gray-300 w-64"
            placeholder="What are you looking for?"
          />
          <img
            src="/Component 2.png" // Replace with your icon path
            alt="Search Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        {/* Icons */}
        <img src="/Frame 551.png" alt="Icons" className="hidden md:block" />

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden rounded-md bg-gray-200">
              <span>☰</span> {/* Hamburger Icon */}
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              {/* Cancel Button */}
              <SheetTrigger asChild>
                <button className="p-2 rounded-full bg-gray-200">
                  ✕
                </button>
              </SheetTrigger>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href={"/home"}>Home</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}    
