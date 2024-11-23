import { PlusIcon, HeartIcon, ArrowDownTrayIcon, ClockIcon, UserGroupIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const familyMembers = [
  { name: 'Nathan', age: '5 years' },
  { name: 'Jack', age: '3 years' },
  { name: 'Claire', age: '4 years' }
];

const playlists = [
  {
    name: "Nathan's Favorites",
    count: '15 songs',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: "Jack's Bedtime Mix",
    count: '12 songs',
    image: 'https://images.unsplash.com/photo-1566413365547-47adc5565c9b?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: "Claire's Learning Songs",
    count: '20 songs',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'Family Favorites',
    count: '25 songs',
    image: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&auto=format&fit=crop&q=60'
  }
];

const quickLinks = [
  { name: 'Liked Songs', icon: HeartIcon, count: '48 songs' },
  { name: 'Downloaded', icon: ArrowDownTrayIcon, count: '12 items' },
  { name: 'Recent', icon: ClockIcon, count: 'Updated today' },
  { name: 'Most Played', icon: MusicalNoteIcon, count: '30 songs' },
  { name: 'Family Mix', icon: UserGroupIcon, count: '45 songs' }
];

export default function LibraryPage() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const filteredPlaylists = selectedMember
    ? playlists.filter(playlist => playlist.name.includes(selectedMember))
    : playlists;

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Your Library</h1>
        <button className="bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2">
          <PlusIcon className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-white font-semibold mb-3">Family Members</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedMember(null)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
              selectedMember === null
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            All
          </button>
          {familyMembers.map((member) => (
            <button
              key={member.name}
              onClick={() => setSelectedMember(member.name)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                selectedMember === member.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {member.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {quickLinks.map((link) => (
          <div key={link.name} className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-3 cursor-pointer">
            <div className="flex items-center gap-3">
              <link.icon className="w-5 h-5 text-white" />
              <div>
                <p className="text-white text-sm font-medium">{link.name}</p>
                <p className="text-zinc-400 text-xs">{link.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-white font-semibold mb-4">Playlists</h2>
        <div className="grid gap-3">
          {filteredPlaylists.map((playlist) => (
            <div key={playlist.name} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-2 cursor-pointer">
              <img 
                src={playlist.image} 
                alt={playlist.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <p className="text-white font-medium">{playlist.name}</p>
                <p className="text-zinc-400 text-sm">{playlist.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4 text-white font-medium flex items-center justify-center gap-2 mt-6">
        <PlusIcon className="w-5 h-5" />
        Create New Playlist
      </button>
    </div>
  );
}