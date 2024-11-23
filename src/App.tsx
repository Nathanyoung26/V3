import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeIcon, MagnifyingGlassIcon, BookOpenIcon, UserGroupIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CommunityPage from './pages/CommunityPage';
import LearnPage from './pages/LearnPage';
import LibraryPage from './pages/LibraryPage';
import PremiumPage from './pages/PremiumPage';
import ProfilePage from './pages/ProfilePage';
import FeedPage from './pages/FeedPage';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const familyName = "Young"; // This would come from user context/auth

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900">
        <header className="bg-transparent text-white p-4 flex items-center justify-between sticky top-0 z-50 bg-gradient-to-b from-black to-transparent">
          <div>
            <h1 className="text-2xl font-bold">Lullaby</h1>
            <p className="text-sm text-zinc-400">Good evening, {familyName} family</p>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/premium" 
              className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <SparklesIcon className="w-4 h-4" />
              Premium
            </Link>
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&auto=format&fit=crop&q=60" 
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-500"
              />
              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-800 rounded-lg shadow-lg py-1">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-white hover:bg-zinc-700">Profile</Link>
                  <hr className="border-zinc-700 my-1" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-700">Sign Out</button>
                </div>
              )}
            </button>
          </div>
        </header>
        
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/community/feed" element={<FeedPage />} />
          </Routes>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800">
          <div className="flex justify-around p-4">
            <Link to="/" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <HomeIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link to="/search" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Search</span>
            </Link>
            <Link to="/learn" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <BookOpenIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Learn</span>
            </Link>
            <Link to="/library" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <MusicalNoteIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Library</span>
            </Link>
            <Link to="/community" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <UserGroupIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Community</span>
            </Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;