'use client';
import React, { useState } from 'react';
import { Search, User, Crown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { label: 'Wedding' },
    { label: 'Birthday' },
    { label: 'Baby & Kids' },
    { label: 'Party' },
    { label: 'Greeting cards' },
    { label: 'Trending' },
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

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="font-bold text-2xl text-[#54acbf]">
            send<span className="text-[#023859]">cards</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleNavHover(item.label)}
                onMouseLeave={handleNavLeave}
                className="cursor-pointer py-4 text-sm"
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search className="w-5 h-5" />
            </button>

            {/* Auth */}
            {isLoggedIn ? (
              <div
                onMouseEnter={() => setShowUserMenu(true)}
                onMouseLeave={() => setShowUserMenu(false)}
                className="relative"
              >
                <div className="w-8 h-8 bg-emerald-100 flex items-center justify-center rounded-full cursor-pointer">
                  <User />
                </div>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border">
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="px-4 py-2 text-sm">
                  Log in
                </Link>

                <Link
                  to="/premium"
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1"
                >
                  <Crown className="w-4 h-4" />
                  Premium
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 Animated Mega Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            key="mega-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute left-0 top-full w-full bg-white shadow-xl border-t z-40"
          >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-5 gap-10">
              {(dropdownData[activeDropdown] || []).map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold mb-2">{section.title}</h4>

                  {section.items.map((item) => (
                    <p
                      key={item}
                      className="text-sm text-gray-600 hover:text-black transition cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Bar */}
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