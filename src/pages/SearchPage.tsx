import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SearchCategories from '../components/SearchCategories';

export default function SearchPage() {
  return (
    <div className="p-4">
      <div className="sticky top-0 bg-zinc-900 pt-2 pb-4 -mx-4 px-4">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="search"
            placeholder="What do you want to listen to?"
            className="w-full pl-10 pr-4 py-3 bg-zinc-800 rounded-full text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
      <SearchCategories />
    </div>
  );
}