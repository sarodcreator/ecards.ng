'use client';
import React, { useState } from 'react';
import { Search, User, Crown, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Wedding', hasDropdown: true },
    { label: 'Birthday', hasDropdown: true },
    { label: 'Baby & Kids', hasDropdown: true },
    { label: 'Party', hasDropdown: true },
    { label: 'Greeting cards', hasDropdown: true },
    { label: 'Trending', hasDropdown: true },
  ];

  const dropdownData = {
    Wedding: [
      { title: 'Wedding Invites', items: ['AI', 'Elegant', 'Floral', 'Rustic'] },
      { title: 'Save the date', items: ['Simple', 'Photo'] },
      { title: 'Party', items: ['Engagement', 'Bridal shower'] },
      { title: 'Stationery', items: ['RSVP', 'Announcements'] },
      { title: 'Greetings', items: ['Wedding', 'Thank you'] },
    ],
    Birthday: [
      { title: 'Birthday Cards', items: ['AI', 'Modern', 'Kids'] },
      { title: 'Party', items: ['Theme party', 'Kids party'] },
    ],
    'Baby & Kids': [
      { title: 'Baby Shower', items: ['Floral', 'Simple'] },
    ],
    Party: [
      { title: 'Party Invites', items: ['Elegant', 'Modern'] },
    ],
    'Greeting cards': [
      { title: 'Cards', items: ['Thank you', 'Holiday'] },
    ],
    Trending: [
      { title: 'Popular', items: ['Modern', 'AI'] },
    ],
  };

  const handleNavHover = (label) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(label);
    }
  };

  const handleNavLeave = () => {
    if (window.innerWidth >= 768) {
      setTimeout(() => setActiveDropdown(null), 120);
    }
  };

  const handleNavClick = (label) => {
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl text-[#54acbf]">
              send<span className='text-[#023859]'>cards</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => {
              const sections = dropdownData[item.label] || [];
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleNavHover(item.label)}
                  onMouseLeave={handleNavLeave}
                >
                  <button
                    onClick={() => handleNavClick(item.label)}
                    className="flex items-center gap-1 py-4 hover:text-[#101010]"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* ✅ Animated Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.label && sections.length > 0 && (
                      <motion.div
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -15, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-2xl border border-gray-100 rounded-3xl py-8 px-8 w-screen max-w-[1200px] z-50 grid grid-cols-5 gap-8 text-sm"
                      >
                        {sections.map((section) => (
                          <div key={section.title}>
                            <div className="font-semibold mb-3">{section.title}</div>
                            {section.items.map((subItem) => (
                              <a
                                key={subItem}
                                href="#"
                                className="block text-xs py-1 text-gray-600 hover:text-black"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        ))}

                        <div className="col-span-5 border-t pt-6 flex justify-end">
                          <button className="flex items-center gap-2 border px-6 py-3 rounded-2xl">
                            📤 Upload your own
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Auth */}
            {isLoggedIn ? (
              <div
                className="relative"
                onMouseEnter={() => setShowUserMenu(true)}
                onMouseLeave={() => setShowUserMenu(false)}
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-700" />
                </div>

                {showUserMenu && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border py-2">
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className='flex gap-2'>
                <Link
                  to="/login"
                  className="hidden md:flex px-4 py-2 text-sm text-gray-700 hover:text-[#023859]"
                >
                  Log in
                </Link>

                <Link
                  to="/premium"
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 text-sm rounded-2xl"
                >
                  <Crown className="w-4 h-4" />
                  Go Premium
                </Link>
              </div>
            )}

            {/* Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      {showSearch && (
        <div className="border-t p-6">
          <input
            placeholder="Search..."
            className="w-full border p-4 rounded-xl"
          />
        </div>
      )}
    </nav>
  );
};