'use client';
import React, { useState } from 'react';
import { Search, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ IMPORT AVATAR
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // simulate logged in
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // ✅ TEMP USER (replace with Redux later)
  const user = {
    name: "Saro Baridoo",
    avatar: "" // try putting image URL here
  };

  // ✅ INITIALS FUNCTION
  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="font-bold text-2xl text-[#54acbf]">
            send<span className="text-[#023859]">cards</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <Search className="w-5 h-5" />

            {/* Auth */}
            {isLoggedIn ? (
              <div
                onMouseEnter={() => setShowUserMenu(true)}
                onMouseLeave={() => setShowUserMenu(false)}
                className="relative"
              >
                {/* ✅ AVATAR USED HERE */}
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user.avatar} alt={user.name} />

                  <AvatarFallback>
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>

                {/* Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl border">
                    <div className="px-4 py-3 border-b">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">example@email.com</p>
                    </div>

                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-50"
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
    </nav>
  );
};