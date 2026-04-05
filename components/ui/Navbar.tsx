"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, User, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Active route logic (handles nested routes too)
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Underline animation */}
      <style>{`
        .nav-link-animate {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .nav-link-animate::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: #9BBA3B;
          transition: width 0.28s ease;
        }
        .nav-link-animate:hover::after {
          width: 100%;
        }
        .nav-link-active::after {
          width: 0%;
        }
        .nav-link-active:hover::after {
          width: 0%;
        }
      `}</style>

      <div className="w-full px-3 sm:px-4 md:px-6 pt-4.5 pb-2.5 bg-transparent absolute mt-8 left-0 z-50">

        {/* ── DESKTOP ── */}
        <div className="hidden lg:flex items-center justify-between h-[52px]">

          {/* Logo */}
          <Link href="/" className="flex items-center px-4 py-1.5">
            <Image
              src="/assets/pure-ayurveda/Logo.png"
              alt="Logo"
              width={120}
              height={76}
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link-animate px-3 py-1.5 rounded-lg text-[13.5px] font-medium transition-all duration-150 ${
                  isActive(link.href)
                    ? "text-[#9BBA3B] bg-white/10 shadow-sm nav-link-active"
                    : "text-white hover:text-[#9BBA3B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1">
            
            <button className="p-2.5 rounded-full text-white hover:text-[#9BBA3B] hover:bg-white/10 transition-all">
              <User size={19} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* ── TABLET ── */}
        <div className="hidden md:flex lg:hidden items-center justify-between h-[48px]">

          <Link href="/" className="flex items-center px-3 py-1">
            <Image src="/assets/pure-ayurveda/Logo.png" alt="Logo" width={100} height={60} />
          </Link>

          <nav className="flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link-animate px-2 py-1.5 rounded-lg text-[12px] font-medium transition-all ${
                  isActive(link.href)
                    ? "text-[#9BBA3B] bg-white/10 shadow-sm nav-link-active"
                    : "text-white hover:text-[#9BBA3B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-0">
            <button className="p-2 rounded-full text-white hover:text-[#9BBA3B] hover:bg-white/10">
              <Heart size={17} strokeWidth={1.5} />
            </button>
            <button className="p-2 rounded-full text-white hover:text-[#9BBA3B] hover:bg-white/10">
              <User size={17} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="flex md:hidden items-center justify-between h-[52px]">

          <Link href="/" className="flex items-center px-2 py-1">
            <Image src="/assets/pure-ayurveda/Logo.png" alt="Logo" width={90} height={54} />
          </Link>

          <div className="flex items-center gap-0.5">
           
            <button className="p-2.5 rounded-full text-white hover:text-[#9BBA3B] hover:bg-white/10 transition-all">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-1 p-2.5 rounded-full text-white hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X size={20} strokeWidth={1.5} />
                : <span className="flex flex-col gap-[5px] w-5">
                    <span className="block h-[1.5px] w-full bg-white rounded-full" />
                    <span className="block h-[1.5px] w-[70%] bg-white rounded-full" />
                    <span className="block h-[1.5px] w-full bg-white rounded-full" />
                  </span>
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className={`md:hidden absolute top-[80px] left-3 right-3 z-50 transition-all duration-300 ease-in-out ${
        mobileOpen ? "opacity-100 max-h-[500px] translate-y-0" : "opacity-0 max-h-0 overflow-hidden -translate-y-2"
      }`}>
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
          {/* Menu header */}
          <div className="px-4 pt-4 pb-2 border-b border-gray-100">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Menu</p>
          </div>
          <div className="p-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-150 ${
                  isActive(link.href)
                    ? "text-[#9BBA3B] bg-[#f3f8ed]"
                    : "text-[#2a2a2a] hover:text-[#9BBA3B] hover:bg-[#f5f9ee]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9BBA3B]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}