import React from 'react';
import { 
  ShoppingCart, 
  Search, 
  Sun, 
  Moon, 
  PhoneCall, 
  MessageCircle, 
  MapPin,
  X 
} from 'lucide-react';
import { UserProfile } from '../types';
import { BUSINESS_INFO } from '../data/farmData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth?: () => void;
  currentUser?: UserProfile | null;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenWholesaleModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  darkMode,
  onToggleDarkMode,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange,
}) => {
  // Main website sections
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Products' },
    { id: 'wholesale', label: 'Wholesale Orders' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'about', label: 'About Us' },
  ];

  const whatsappHref = `https://wa.me/2348132943544?text=${encodeURIComponent(
    'Hello Rachy Fresh Eggs, I would like to make an inquiry.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF8E7] dark:bg-[#3B2314] border-b border-[#3B2314]/10 dark:border-[#FFF8E7]/10 shadow-xs transition-colors duration-200">
      
      {/* 1. Thin Top Info Bar: Address & Hotline (keeps main nav clean and single-line) */}
      <div className="bg-[#3B2314] text-[#FFF8E7]/90 dark:bg-[#25150B] dark:text-[#FFF8E7]/80 text-xs py-1.5 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-[#F2A81D] shrink-0" aria-hidden="true" />
            <span className="truncate">
              No. 20 Queensland Hotel, Phase 2, Lokoja, Kogi State
            </span>
            <span className="hidden md:inline text-[#FFF8E7]/30" aria-hidden="true">·</span>
            <span className="hidden md:inline text-[#FFF8E7]/70 font-normal">
              Fresh Daily Farm Supply (Retail &amp; Wholesale)
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="inline-flex items-center gap-1.5 text-[#FFF8E7] hover:text-[#F2A81D] transition-colors focus-visible:ring-2 focus-visible:ring-[#F2A81D] rounded"
              title="Call orders desk"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F2A81D]" aria-hidden="true" />
              <span className="font-medium">{BUSINESS_INFO.phoneFormatted || BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-[#FFF8E7]/30" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-[#FFF8E7]/70">
              Lokoja, Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Row:
          Order: [Logo + wordmark] [Search bar] [WhatsApp button] [Dark mode toggle] [Cart with badge]
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Item 1: [Logo + Wordmark] */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group shrink-0 rounded-lg p-1 -m-1 focus-visible:ring-2 focus-visible:ring-[#F2A81D] cursor-pointer"
            aria-label="Rachy Fresh Eggs Home"
          >
            <img
              src={BUSINESS_INFO.logo || '/rachy_brand_logo.jpg'}
              alt="Rachy Fresh Eggs Logo"
              className="h-11 sm:h-14 md:h-16 w-auto object-contain rounded-md shrink-0 transition-transform duration-200 group-hover:scale-[1.03]"
              loading="eager"
              decoding="async"
            />
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#B45309] dark:text-[#F2A81D] leading-none mb-1">
                THE RACHY BRAND
              </span>
              <span className="text-base sm:text-xl font-bold text-[#3B2314] dark:text-[#FFF8E7] leading-tight tracking-tight">
                Rachy Fresh Eggs
              </span>
            </div>
          </button>

          {/* Item 2: [Search Bar (Takes the most space on Desktop/Tablet)] */}
          <div className="hidden sm:block flex-1 max-w-xl mx-2 sm:mx-4 relative">
            <label htmlFor="header-search-desktop" className="sr-only">
              Search eggs, crates
            </label>
            <Search 
              className="w-4 h-4 text-[#3B2314]/50 dark:text-[#FFF8E7]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" 
              aria-hidden="true" 
            />
            <input
              id="header-search-desktop"
              type="search"
              placeholder="Search eggs, crates..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-sm bg-white dark:bg-[#2A190E] border border-[#3B2314]/20 dark:border-[#FFF8E7]/20 rounded-xl text-[#3B2314] dark:text-[#FFF8E7] placeholder-[#3B2314]/50 dark:placeholder-[#FFF8E7]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#F2A81D] focus:border-[#F2A81D] min-h-[44px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#3B2314]/60 dark:text-[#FFF8E7]/60 hover:text-[#3B2314] dark:hover:text-[#FFF8E7] rounded-full focus-visible:ring-2 focus-visible:ring-[#F2A81D]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Action cluster on Desktop/Tablet & Right items on Mobile */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Item 3: [WhatsApp Button]
                - Desktop: Icon + "Chat on WhatsApp"
                - Tablet: Icon only
                - Mobile: Hidden in header row (moves to bottom-right floating button)
            */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark hidden sm:inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors min-h-[44px] min-w-[44px] shadow-xs cursor-pointer shrink-0"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp (08132943544)"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span className="hidden lg:inline whitespace-nowrap">Chat on WhatsApp</span>
            </a>

            {/* Item 4: [Dark Mode Toggle]
                - Matching round icon button with same 44px size as cart button
            */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#3B2314]/20 dark:border-[#FFF8E7]/20 bg-white/80 dark:bg-[#2A190E] text-[#3B2314] dark:text-[#F2A81D] hover:bg-white dark:hover:bg-[#341F12] flex items-center justify-center transition-colors shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F2A81D] shrink-0"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[#F2A81D]" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-[#3B2314]" aria-hidden="true" />
              )}
            </button>

            {/* Item 5: [Cart with Badge]
                - Single cart button
                - Desktop: Icon + "Cart" label + live badge
                - Tablet/Mobile: Matching round icon button + live badge
                - Badge: Single red accent (#DC2626)
            */}
            <button
              type="button"
              onClick={onOpenCart}
              className="h-11 min-h-[44px] min-w-[44px] px-3 md:px-4 rounded-full md:rounded-xl bg-[#3B2314] hover:bg-[#2A190E] text-[#FFF8E7] dark:bg-[#FFF8E7] dark:text-[#3B2314] dark:hover:bg-[#F2E8D5] flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-xs relative cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F2A81D] shrink-0"
              aria-label={`Shopping cart with ${cartCount} crates`}
            >
              <ShoppingCart className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span className="hidden md:inline font-medium text-sm">Cart</span>
              {cartCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 bg-[#DC2626] text-white text-[10px] font-bold rounded-full min-w-[19px] h-[19px] px-1 flex items-center justify-center shadow-xs border-2 border-[#FFF8E7] dark:border-[#3B2314]"
                  aria-label={`${cartCount} items in cart`}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Row 2 (under 640px): Full-Width Search Bar */}
        <div className="sm:hidden pt-2.5 w-full relative">
          <label htmlFor="header-search-mobile" className="sr-only">
            Search eggs, crates
          </label>
          <Search 
            className="w-4 h-4 text-[#3B2314]/50 dark:text-[#FFF8E7]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" 
            aria-hidden="true" 
          />
          <input
            id="header-search-mobile"
            type="search"
            placeholder="Search eggs, crates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 text-sm bg-white dark:bg-[#2A190E] border border-[#3B2314]/20 dark:border-[#FFF8E7]/20 rounded-xl text-[#3B2314] dark:text-[#FFF8E7] placeholder-[#3B2314]/50 dark:placeholder-[#FFF8E7]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#F2A81D] focus:border-[#F2A81D] min-h-[44px]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#3B2314]/60 dark:text-[#FFF8E7]/60 hover:text-[#3B2314] dark:hover:text-[#FFF8E7] rounded-full focus-visible:ring-2 focus-visible:ring-[#F2A81D]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 3. Category & Section Navigation Tabs (Home, Our Products, Wholesale Orders, Contact Us, About Us) */}
      <nav 
        className="border-t border-[#3B2314]/10 dark:border-[#FFF8E7]/10 bg-[#FFF8E7]/95 dark:bg-[#341F12]/95"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <ul className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 py-1.5 overflow-x-auto no-scrollbar max-w-full">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      className={`text-xs sm:text-sm font-medium py-1.5 px-3 rounded-lg transition-colors cursor-pointer min-h-[38px] flex items-center ${
                        isActive
                          ? 'text-[#3B2314] dark:text-[#FFF8E7] font-bold border-b-2 border-[#F2A81D] rounded-b-none'
                          : 'text-[#3B2314]/75 dark:text-[#FFF8E7]/75 hover:text-[#3B2314] dark:hover:text-[#FFF8E7] hover:bg-[#3B2314]/5 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* 4. Mobile Floating WhatsApp Button (Under 640px)
          - Sits conveniently at bottom-right of the screen within thumb reach
      */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-dark sm:hidden fixed bottom-20 right-4 z-50 flex items-center justify-center w-13 h-13 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (08132943544)"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </a>
    </header>
  );
};
