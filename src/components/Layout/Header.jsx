import React from "react";
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";

const Header = ({ cartCount, searchTerm, setSearchTerm }) => (
  <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Local Store</h1>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-md"
        />
      </div>
      <button className="relative p-2">
        <ShoppingCartIcon className="h-6 w-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  </header>
);

export default Header;
